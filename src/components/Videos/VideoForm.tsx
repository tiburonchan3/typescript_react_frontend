import React,{ChangeEvent, useState,FormEvent,useEffect} from 'react'
import {Row,Col,Card,Form,Button} from 'react-bootstrap'
import {Video} from './Video'
import * as videoService from './VideoService'
import {toast} from 'react-toastify'
import {useHistory,useParams} from 'react-router-dom'

type typeChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
type typeSubmit = FormEvent<HTMLFormElement>
interface Params {
    id:string
}

export const VideoForm = (props) => {
    const [video, setvideo] = useState<Video>({
        title:"",
        description:"",
        url:""
    });
    const history = useHistory()
    const params = useParams<Params>()
    const Submit = async (e : typeSubmit)=>{
        e.preventDefault()
        if(params.id){
            await videoService.updateVideo(params.id,video).then(()=>{
                toast.success("Se actualizo el video")
            })
        }else{
            if(video.title !== '' && video.url !== '' && video.description !== ''){
                await videoService.createVideo(video).then(resp=>{
                    toast.success("Se agrego el video")
                })
            }else{
                toast.warning("Datos vacios")
            }
        }
        history.push('/')
    }
    const Change = (e : typeChange) =>{
        setvideo({...video,[e.target.name]:e.target.value})
    }
    const getVideo = async (id:string) => {
        const res = await videoService.getVideo(id)
        const {title,description,url} = res.data
        setvideo({title,description,url})
    }
    useEffect(() => {
        getVideo(params.id)
    }, [params.id])
    return (
       <Row>
           <Col xs={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
               <Card className="mt-5">
                   <Card.Header>
                       <Card.Title>Nuevo Video</Card.Title>
                   </Card.Header>
                   <Card.Body>
                      <Form onChange={Change} onSubmit={Submit}>
                          <Form.Group>
                              <label>TITULO DEL VIDEO</label>
                              <Form.Control defaultValue={video.title} name="title" type="text" placeholder="Agrega el titulo"></Form.Control>
                          </Form.Group>
                          <Form.Group>
                              <label>URL DEL VIDEO</label>
                              <Form.Control defaultValue={video.url} name="url" type="text" placeholder="Agrega la url del video"></Form.Control>
                          </Form.Group>
                          <Form.Group>
                              <label>DESCRIPCION DEL VIDEO</label>
                              <Form.Control defaultValue={video.description} name="description" as="textarea" rows={5}  placeholder="Agrega el titulo"></Form.Control>
                          </Form.Group>
                        <Form.Group>
                           {params.id ? <Button variant="primary" type="submit">
                               Actualizar
                            </Button>
                            :
                            <Button variant="primary" type="submit">
                                Guardar
                            </Button>
                            }
                        </Form.Group>
                      </Form>
                   </Card.Body>
               </Card>
           </Col>
       </Row>
    )
}
