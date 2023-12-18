'use client'
import React, { useEffect, useState } from 'react';
import '../styles/theme.css';


const colors = [
  { name: 'custom', rgb: 'custom' },
  { name: 'blue', rgb: '65, 134, 255' },
  { name: 'green', rgb: '3, 170, 0' },
  { name: 'orange', rgb: '255, 135, 75' }
]


const Theme = () => {
  const [nameColor, setNameColor] = useState('');
  const [rgb, setRgb] = useState('');

  const changeColor = (color) => {
    if (color.name === 'custom') {
      const inputColor = document.createElement('input')
      inputColor.type = 'color';
      inputColor.click();
      inputColor.addEventListener('change', () => {
        setRgb(hexToRgb(inputColor.value).toString());
        setNameColor(color.name)
      })
    } else {
      setNameColor(color.name)
      setRgb(color.rgb)
    }

  }

  function hexToRgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
  }

  useEffect(() => {
    if (!rgb || !nameColor) return;
    document.documentElement.style.setProperty('--primary-rgb', rgb);
    localStorage.setItem('travel-rgb', rgb)
    localStorage.setItem('travel-nameColor', nameColor)
  }, [rgb, nameColor])

  useEffect(() => {
    const rgb = localStorage.getItem('travel-rgb') || '65, 134, 255';
    const nameColor = localStorage.getItem('travel-nameColor') || 'blue';
    setNameColor(nameColor);
    setRgb(rgb);
  }, [])

  return (
    <div className='theme'>
      {
        colors.map(color => (
          <button
            key={color.name}
            className={`${color.name} ${color.name === nameColor ? 'active' : ''}`}
            aria-label={color.name}
            onClick={() => changeColor(color)}
          />
        ))
      }
    </div>
  )
}

export default Theme