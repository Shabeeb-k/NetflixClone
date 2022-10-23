import React,{useEffect,useState} from 'react'
import './Rowpost.css';
import YouTube from 'react-youtube';
import axios from '../../axios'
import {imageurl,API_KEY} from '../../Constants/Constants';
function Rowpost(props) {
  const [Movies,setMovies]= useState([])
  const [urlId,seturlId]= useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
},)
const opts = {
  height: '450',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  }
}
const MovieHandle=(id)=>
{
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if (response.data.results.length!==0) {
      seturlId(response.data.results[0])
    }
    else{
      console.log('array empty')
    }
  })
}
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {Movies.map((obj)=>

            <img onClick={()=>MovieHandle(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageurl+obj.backdrop_path}`}  alt=''/>
         
         )}   
        </div>
        {   urlId && <YouTube opts={opts} videoId={urlId.key}/>   }
    </div>
  )
} 

export default Rowpost 
