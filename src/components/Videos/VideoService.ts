import axios from 'axios'
import {API_HOST} from '../../utils/constans'
import { Video } from './Video'

export const getVideos = async () => {
   return await axios.get<Video[]>(`${API_HOST}/videos`)
}

export const createVideo = async (video:Video) => {
    return await axios.post(`${API_HOST}/videos`,video)
}

export const getVideo = async (id:string) => {
    return await axios.get<Video>(`${API_HOST}/videos/${id}`)
 }

export const updateVideo = async (id:string,video:Video) => {
    return await axios.put<Video>(`${API_HOST}/videos/${id}`,video)
}

export const deleteVideo = async (id:string) => {
    return await axios.delete(`${API_HOST}/videos/${id}`)
}
