import React from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';

export const MapComponent = () => {
    return (
        <Map
            center={{ lat: 36.017567, lng: 129.358549 }}   // 지도의 중심 좌표
            style={{ width: '800px', height: '600px' }} // 지도 크기
            level={5}                                   // 지도 확대 레벨
        >
            <MapMarker
                key={`ss`}
                position={{ lat: 36.017567, lng: 129.358549 }}
                image={{
                    src: '/circle.png',
                    size: { width: 150, height: 150 },
                }}
                title={''}
            />
            {/*<MapMarker position={{ lat: 36.017567, lng: 129.358549 }}/>*/}
        </Map>);
};