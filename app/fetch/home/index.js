//api/ad
import {get} from '../index';
export function getAd() {
    return get('/api/ad');
}
getAd().then()