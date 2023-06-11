import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RecentlyPlayed from "./RecentlyPlayed";

import React, { Suspense, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sky, OrbitControls, Text } from "@react-three/drei";
import XrHitModelContainer from "../../../containers/XRHitModelContainer/XRHitModelContainer";
import { Interactive, XR, ARButton, Controllers } from '@react-three/xr';
import * as THREE from 'three';


function Image(props) {
  const { imgSrc, position } = props;
  const texture = useLoader(THREE.TextureLoader, imgSrc);
  const vectorPosition = new THREE.Vector3().fromArray(position);

  return (
    <mesh position={vectorPosition}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={texture} transparent={true} />
    </mesh>
  );
}

function Box({ color, size, scale, children, ...rest }) {
  return (
    <mesh scale={scale} {...rest}>
      <boxBufferGeometry args={size} />
      <meshPhongMaterial color={color} />
      {children}
    </mesh>
  );
}

// function Button({track, chooseTrack, ...props}) {
//   const [hover, setHover] = useState(false);
//   const [url, setUrl] = useState('/Panel_Assets/Adele_Spotify_Panel.png');
//   const [color, setColor] = useState('blue');

//   const [play, setPlay] = useRecoilState(playState);
//   const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

//   console.log(track)

//   const handlePlay = () => {
//     chooseTrack(track);

//     if (track.uri === playingTrack.uri) {
//       setPlay(!play);
//     }
//   };
//   const onSelect = () => {
//     setColor((Math.random() * 0xffffff) | 0);
//   };

//   const onImageSelect = () => {
//     setUrl('/Panel_Assets/Adele_Detail_Panel.png');
//   };

//   return (
//     <Box>
//       <Interactive onSelect={onImageSelect}>
//         <Image imgSrc={track.albumUrl} position={[0, 0, -1]} />
//       </Interactive>
//     </Box>
//   );
// }

function Right({ spotifyApi, chooseTrack }) {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  
  const [hover, setHover] = useState(false);
  const [url, setUrl] = useState('/Panel_Assets/Adele_Spotify_Panel.png');
  const [color, setColor] = useState('blue');

  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  console.log(track)

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };
  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  };

  const onImageSelect = () => {
    setUrl('/Panel_Assets/Adele_Detail_Panel.png');
  };

  // Recently Played Tracks...
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res) => {
      setRecentlyPlayed(
        res.body.items.map(({ track }) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  return (
    <>
    <div>Hello</div>
    <ARButton />
    <Canvas>
        <XR referenceSpace="local">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box>
          <Interactive onSelect={onImageSelect}>
            {recentlyPlayed.map((track, index) => (
              // <RecentlyPlayed
              //   key={index}
              //   track={track}
              //   chooseTrack={chooseTrack}
              // />
              <Image imgSrc={track.albumUrl} position={[0, 0, -1]} />
            ))}
          </Interactive>
       </Box>
       <Controllers />
              </XR>
          </Canvas>
      </>
      
  );
}


// const SpotifyPanel = ({track, chooseTrack}) => {

//   console.log(track)
//   return (
//       <>
//           <div>Hello</div>
//           <ARButton />
//           <Canvas>
//               <XR referenceSpace="local">
//               <ambientLight />
//               <pointLight position={[10, 10, 10]} />
//               {/* <Button position={[0, 0.1, -0.2]} track={track} chooseTrack={chooseTrack}/> */}
//               <Controllers />
//               </XR>
//           </Canvas>
//       </>
      
//   )
// }



export default Right;