'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;
import { fromLonLat } from 'ol/proj';

export default function OpenLayerMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapObj = useRef<Map>();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && mapRef.current && !mapObj.current) {
      // Double-check container size here
      const rect = mapRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        console.error('Map container has zero width or height');
        return;
      }

      mapObj.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([2.3522, 48.8566]), // Paris coords
          zoom: 12,
        }),
      });
    }
  }, [isMounted]);

  return (
    <Card
      title="Explore Activities on Map"
      style={{
        height: 900, // fixed px height, no %
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        ref={mapRef}
        style={{
          flex: 1,
          width: '100%',
          minHeight: 0,
          // explicitly set height since flex:1 can be tricky in some layouts
          height: '100%',
        }}
      />
      <div
        style={{
          marginTop: 12,
          backgroundColor: '#fff',
          padding: 12,
          borderRadius: 8,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          maxHeight: '150px',
          overflowY: 'auto',
        }}
      >
        <Title level={5}>Sample Activities</Title>
        {[{ id: 1, title: 'Eiffel Tower Tour', price: 35 }, { id: 2, title: 'Louvre Museum', price: 25 }].map((act) => (
          <div key={act.id} style={{ marginBottom: 8 }}>
            <b>{act.title}</b> — ${act.price}{' '}
            <Button size="small" type="primary">
              Book Now
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
