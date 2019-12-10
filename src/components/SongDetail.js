import React from 'react';

const SongDetail = (props) => {
  const title = props.songs.map((song, index) => {
    return <div><li value={index} key={index}>{song["im:name"].label}</li>
     <li value={index} key={index}>{index + 1}</li>
     <li value={index} key={index}>{song["im:artist"].label}</li></div>
  })

  // const chartPosition = props.songs.map((song, index) => {
  //   return <li value={index} key={index}>{index + 1}</li>
  // })
  //
  // const artist = props.songs.map((song, index) => {
  //   return <li value={index} key={index}>{song["im:artist"].label}</li>
  // })

  return (
    <div className="list">
    <ul>
    {title}
    </ul>


    </div>
  )
}

export default SongDetail
