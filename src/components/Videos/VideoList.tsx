import React,{useEffect,useState} from 'react'
import * as videoService from './VideoService'
import {Video} from './Video'
import {VideoItem} from './VideoItem'
import { VideoForm } from './VideoForm'
import {Row,Col} from 'react-bootstrap'

export const VideoList = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const LoadVideos = async ()=>{
        const res = await videoService.getVideos()
        const formatVideos = res.data.map((video,index) => {
            return {
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
                updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
                key: index
            }
        }).sort((a,b)=>b.createdAt.getTime() - a.createdAt.getTime())
        setVideos(formatVideos)
    }
    useEffect(() => {
        LoadVideos()
    }, []);
    return (
        <Row className="mt-4">
             {
                videos.map((video,index) => {
                    return (
                       <Col xs={4} md={4} sm={12} key={index}>
                            <VideoItem LoadVideos={LoadVideos} video={video}></VideoItem>
                        </Col>
                    )
                })
            }
        </Row>
    )
}
