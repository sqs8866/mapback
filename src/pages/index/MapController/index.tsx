import { Component } from 'react'
import { Map, Image, View } from '@tarojs/components'
import locationUtil from '@utils/locationUtil'
export default class MapController extends Component<any, any>{
    private env: string | undefined = process.env.TARO_ENV;
    private regionChangeTime: number = 0;
    constructor(props) {
        super(props);
        this.state = {
            mapInfo: {
                latitude: 39.908823,
                longitude: 116.39747,
            },
            calloutAddress: '正在获取您的位置...',
        }
    }
    //地图区域变化事件
    async mapChangeFun(lat, lon) {
        let position = await locationUtil.getBDAddressMsg(lat, lon);
        this.startAddressChanged(position);
    }
    // eslint-disable-next-line react/sort-comp
    async startAddressChanged(pos: { loc: any; cityId?: any }) {
        if (pos && pos.loc) {
            const { loc, cityId } = pos;
            this.setState({
                mapInfo: loc,
                calloutAddress: loc.name
            })
        }
    }
    debounce(fn: any, delay: number | undefined = 500) {
        let timer: any = null
        return (event: any) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.call(this, event)
            }, delay)
        }
    }
    /**
   * 滑动地图
   * */
    regionchange = this.debounce((e: any) => {
        console.log('++++++++regionchange+++++')
        console.log(e)
        if (e.type === 'begin') {
            if (this.env == 'alipay') {
                this.regionChangeTime = Number(e.timeStamp)
            }
            return;
        }
        if (e.type === 'end') {
            if (e.causedBy === 'update') return;
            if (this.env == 'alipay' && Number(e.timeStamp) - this.regionChangeTime <= 100) {
                this.regionChangeTime = Number(e.timeStamp)
                return;
            }
            let cLoc
            switch (this.env) {
                case 'weapp':
                case 'tt':
                    cLoc = e.detail.centerLocation
                    break;
                case 'alipay':
                    cLoc = {
                        latitude: Number(e.latitude),
                        longitude: Number(e.longitude)
                    }
                    break;
            }
            this.mapChangeFun(cLoc.latitude, cLoc.longitude);
        }
    }, 500)
    render() {
        const { mapInfo, calloutAddress } = this.state
        return (
            <>
                <Map
                    id="map"
                    style={{ width: '100%', height: '100vh' }}
                    scale={14}
                    latitude={mapInfo.latitude}
                    longitude={mapInfo.longitude}
                    showLocation
                    onRegionChange={this.regionchange}
                />
                {/*地图中间定位icon*/}
                <View className="index-icon-center">
                    <Image className="index-icon-img" src={require('../../../res/center-location.png')}></Image>
                </View>
                {/*气泡 */}
                <View className="index-callout">
                    <View className="index-callout-center">{calloutAddress}</View>
                    <Image className="index-arrow-right" src={require('../../../res/map-arrow2.png')}></Image>
                    <View className="index-arrow-down"></View>
                </View>
            </>
        )
    }
}