import React from 'react'
import { Video } from './Video'
import {Card} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import './VideoItem.css'
import {useHistory} from 'react-router-dom'
import * as VideoService from './VideoService'

interface Props {
    video: Video,
    LoadVideos: ()=>void;
}
export const VideoItem = ({video,LoadVideos}:Props) => {
    const history = useHistory()
    const Click = async (id:string,) => {
        await VideoService.deleteVideo(id)
        LoadVideos()
    }
    return (
        <Card className="mb-3 p-2 card-video">
            <div className="d-flex justify-content-between">
                <h1
                    className="lead"
                    style={{cursor:'pointer'}}
                    onClick={()=>history.push(`/update/${video._id}`)}>
                        {video.title}
                </h1>
                <button onClick={()=>video._id && Click(video._id)} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <p>{video.description}</p>
            <div className="embed-responsive embed-responsive-16by9">
                <ReactPlayer url={video.url} />
            </div>
        </Card>
    )
}
