import {get} from '../index';
export function getInfo(id) {
    return get('/api/detail/info'+id);
}
