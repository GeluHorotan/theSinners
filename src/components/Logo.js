import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { logoMiddle, logoLeft, logoRight, pathTest } from './animation';

const Logo = () => {
  return (
    <ContainerStyle>
      <SvgStyle
        xmlns='http://www.w3.org/2000/svg'
        width='4217.922'
        height='4034.739'
        viewBox='0 0 4217.922 4034.739'
      >
        <g id='Ninja' transform='translate(1931 1572)'>
          <motion.g
            variants={logoRight}
            initial='hidden'
            animate='show'
            id='Right'
            transform='translate(-2322.03 -2054.64)'
          >
            <path
              id='Path_1'
              data-name='Path 1'
              d='M1804.59,1206.46c-64.44,45.11-109.91,111.88-138.4,185.82,11.97-17.11,24.41-33.8,37.54-49.86,21.8-26.65,45.77-51.39,72.26-72.55a334,334,0,0,1,41.6-28.63,351.216,351.216,0,0,1,44.25-22.03,398.11,398.11,0,0,1,45.41-15.85,465.571,465.571,0,0,1,45.49-10.67c30.18-5.67,59.92-8.32,88.71-9.54a740.974,740.974,0,0,1,83.71,1.62,721.551,721.551,0,0,1,77.39,10.23,663.752,663.752,0,0,1,69.84,17.32,594.04,594.04,0,0,1,62.24,22.94q11.58-7.41,24.54-15.14c-73.83-31.54-149.21-59.07-228.14-72.4-111.83-18.88-233.51-6.3-326.43,58.74Z'
              fill='#2b92a3'
            />
            <path
              id='Path_2'
              data-name='Path 2'
              d='M2354.79,3579.58c-17.61-52.57-12.54-106.03,4.9-158.15q-12.315,4.725-24.44,8.93c-3.38,1.19-6.75,2.32-10.1,3.43-3.14,1.06-6.29,2.09-9.41,3.07q-7.92-3.87-16.08-8.04c-3.66-1.83-7.34-3.66-11.08-5.51q-15.345-7.695-31.7-15.85c-7.53-3.61-14.84-7.86-22.47-11.96q-11.37-6.225-23.17-12.68-11.79-6.5-23.97-13.17c-4.05-2.27-8.17-4.46-12.24-6.83q-6.03-3.6-12.19-7.27-24.585-14.76-50.54-30.36a2301.437,2301.437,0,0,1-214.21-151.69,2500.616,2500.616,0,0,1-194.75-176.07q-20.955-21.84-40.82-42.55-4.98-5.175-9.84-10.28c-3.22-3.43-6.26-6.98-9.38-10.41q-9.24-10.395-18.19-20.44-8.925-10.05-17.55-19.77c-5.7-6.52-11.47-12.73-16.67-19.25q-15.855-19.29-30.38-36.98c-12.04-14.3-22.78-28.3-32.63-41.41.39,2.24.85,4.51,1.24,6.8.8,4.38,1.6,8.81,2.42,13.35s1.62,9.12,2.47,13.81c.41,2.32.77,4.69,1.26,7.06.54,2.35,1.11,4.72,1.65,7.09q3.21,14.34,6.65,29.46a1032.975,1032.975,0,0,0,40.85,127.72q1.89,4.635,3.79,9.2c10.1,24.17,20.77,47.29,31.65,69.2-.9-.88-1.83-1.75-2.73-2.63q-10.125-10.125-20.59-20.62c-3.48-3.53-7.06-7.01-10.51-10.62q-5.175-5.49-10.39-11.06c-6.93-7.47-14.1-14.95-21.13-22.73-.77-.88-1.55-1.78-2.32-2.65-6.16-7.01-12.42-14.1-18.71-21.26-7.22-8.02-13.99-16.55-21.06-25.02-6.98-8.53-14.2-17.04-21-26.03q-10.32-13.38-20.88-27.03-10.125-14-20.44-28.22c-27.09-38.3-53.4-79.17-78.09-122.36-24.43-43.32-46.21-86.8-65.43-129.55q-7.035-16.125-13.97-31.96-6.42-16-12.73-31.72c-.28-.67-.54-1.34-.82-2.01-3.04-7.47-5.8-15-8.5-22.45-.82-2.29-1.68-4.56-2.5-6.83-3.76-10.39-7.71-20.54-10.98-30.82q-5.07-15.315-10.03-30.28c-3.2-10-6.03-19.95-8.97-29.71-1.47-4.87-2.91-9.74-4.33-14.56-1.39-4.82-2.6-9.66-3.89-14.43q-3.8-14.34-7.45-28.25c-2.29-9.28-4.3-18.48-6.42-27.47-2.01-8.99-4.23-17.78-5.82-26.52-1.73-8.71-3.4-17.27-5.03-25.62-.8-4.18-1.68-8.3-2.37-12.4-.67-4.12-1.31-8.17-1.98-12.19-2.55-16.06-5.21-31.31-6.83-45.87-1.78-14.53-3.74-28.19-4.72-41.08-1.08-12.86-2.24-24.79-2.94-35.82-.18-3.45-.34-6.83-.52-10.1-.31-7.16-.59-13.87-.82-20.08-.03-.64-.05-1.26-.08-1.88,3.69-3.35,7.4-6.83,11.18-10.41a971.206,971.206,0,0,0,82.11-88.55c28.43-34.53,57.44-74.17,86.33-118.24,28.84-44.12,57.37-92.85,86.26-144.94s58.11-107.54,89.38-164.81c31.36-57.19,64.69-116.26,102.91-174.55q11.31-17.43,23.15-34.41c28.49-73.94,73.95-140.72,138.4-185.82,92.92-65.04,214.6-77.62,326.43-58.74,78.93,13.33,154.31,40.86,228.14,72.4q7.665-4.56,15.8-9.18a66.083,66.083,0,0,1-6.66-45.12c3.69-18.12,14.55-34.24,17.66-52.46,7.39-43.3-29.08-79.96-49.46-118.88-35-66.84-22.87-147.78-6.31-221.39s36.64-150.84,15.12-223.16a145.373,145.373,0,0,0-8.58-21.96,164.826,164.826,0,0,0-23.81-35.98c-12.86,2.25-28.39,5.33-46.28,9.7-14.1,3.63-29.71,7.81-46.47,13.43-16.75,5.57-34.77,12.24-53.68,20.33a726.1,726.1,0,0,0-122.08,67.78,838.2,838.2,0,0,0-128.81,109.61,882.909,882.909,0,0,0-61.75,71.31c-5.18,6.26-9.97,12.91-14.9,19.51q-3.7,4.95-7.42,9.95c-2.47,3.32-5,6.62-7.35,10.1q-7.155,10.29-14.43,20.72c-2.45,3.43-4.79,6.98-7.11,10.57s-4.66,7.16-7.01,10.75c-9.59,14.25-18.4,29.28-27.65,44.22-8.79,15.26-17.91,30.57-26.39,46.47-8.81,15.69-17.01,31.98-25.49,48.3-8.14,16.52-16.49,33.12-24.35,50.18-32.06,67.91-61.39,140.17-90.33,214.78-28.84,74.71-56.18,148.19-84.56,218.59-7.01,17.63-14.28,35.02-21.42,52.24-7.32,17.16-14.48,34.2-21.98,50.9-7.29,16.78-15.02,33.17-22.5,49.46-7.81,16.13-15.31,32.19-23.35,47.75-31.42,62.6-65.36,120.17-100.87,171.53a1061.867,1061.867,0,0,1-110.02,134.06,847.984,847.984,0,0,1-107.6,94.01q-6.375,4.635-12.53,9.12c-4.07,3.02-8.35,5.62-12.4,8.35-4.07,2.68-8.07,5.33-11.98,7.91-3.94,2.55-7.68,5.21-11.62,7.42-6.37,3.76-12.53,7.4-18.43,10.88,3.89,26.7,8.92,57.83,15.72,92.78,10.15,52.26,24.28,113.06,44.38,180.27,1.06,3.61,2.01,7.29,3.2,10.9,1.19,3.63,2.37,7.27,3.58,10.93q3.63,10.98,7.32,22.22t7.45,22.7c.62,1.91,1.26,3.84,1.88,5.75.7,1.91,1.42,3.81,2.11,5.72,1.42,3.81,2.83,7.63,4.28,11.49,5.75,15.39,11.47,31.16,17.52,47.11q9.78,23.655,19.95,48.19c1.44,3.35,2.91,6.73,4.38,10.1q5.415,12.33,11.06,24.77a1802.172,1802.172,0,0,0,86.44,166.48q3.645,6.18,7.36,12.38a1663.47,1663.47,0,0,0,134.41,192.45c27.47,33.37,55.95,66.95,86.77,99.27,3.81,4.1,7.63,8.17,11.47,12.27,3.81,4.12,7.83,8.04,11.75,12.06q11.835,12.06,23.76,24.15,12.21,11.835,24.48,23.74,6.15,5.91,12.32,11.91c4.23,3.87,8.43,7.76,12.65,11.62q12.675,11.67,25.28,23.25,12.87,11.3,25.64,22.52c4.28,3.71,8.48,7.5,12.78,11.16,4.33,3.63,8.66,7.27,12.96,10.88,8.63,7.24,17.16,14.53,25.82,21.62,17.5,13.97,34.56,28.19,52.16,41.49q13.11,10.095,26.08,20.1,13.185,9.78,26.24,19.46,6.54,4.83,13.04,9.66c4.41,3.12,8.79,6.26,13.17,9.38q13.11,9.36,26.11,18.66c8.79,6.03,17.5,12.03,26.21,18.01,8.66,6,17.32,11.96,26.06,17.68q13.02,8.655,25.95,17.24c8.58,5.75,17.32,11.16,25.9,16.73,8.63,5.49,17.11,11.08,25.69,16.39q12.915,8,25.62,15.88c67.96,41.98,134.06,79.51,196.61,113.45,55.25,30.02,107.75,57.21,156.56,81.9,4.95-1.62,10.03-3.3,15.23-5,4.46-1.37,8.89-3.09,13.43-4.79s9.17-3.43,13.89-5.21c3.55-1.33,7.17-2.68,10.82-4.04-27.71-28.66-50.3-60.42-62.88-97.99Z'
              fill='#65cbe4'
            />
            <path
              id='Path_3'
              data-name='Path 3'
              d='M2369.99,4167.05a690.336,690.336,0,0,1-26.18-232.52c-1.13-.53-2.27-1.06-3.4-1.59-45.05-21.11-92.98-44.28-143.19-69.79-63.73-32.39-131.15-68.55-200.48-109.55l-26.13-15.54c-8.76-5.21-17.42-10.7-26.21-16.08-8.76-5.46-17.68-10.8-26.44-16.44q-13.185-8.46-26.49-17.01c-8.92-5.64-17.73-11.55-26.6-17.47q-13.26-8.895-26.7-17.89-13.26-9.24-26.65-18.56c-4.48-3.09-8.94-6.21-13.43-9.36-4.43-3.2-8.87-6.39-13.3-9.61q-13.335-9.7-26.75-19.46c-8.89-6.6-17.71-13.4-26.62-20.13-17.91-13.35-35.33-27.65-53.14-41.7-8.81-7.16-17.52-14.54-26.31-21.83q-6.57-5.49-13.2-11c-4.38-3.69-8.66-7.53-13.01-11.29q-13.02-11.37-26.08-22.81c-8.56-7.83-17.11-15.72-25.72-23.58q-6.42-5.955-12.83-11.86c-4.17-4.05-8.35-8.07-12.52-12.11-8.32-8.07-16.67-16.06-24.9-24.15q-12.1-12.33-24.12-24.59c-3.99-4.12-8.07-8.12-11.93-12.29q-5.835-6.27-11.65-12.52c-31.29-32.99-60.18-67.32-88.01-101.46a1643.608,1643.608,0,0,1-142.83-209.75q-26.445-46.02-48.9-91.44-19.44-39.15-36.15-77.44a988.291,988.291,0,0,1-112.18,47.24c-11.49,4.05-23.19,8.02-35.1,11.75-11.88,3.84-23.97,7.22-36.16,10.9-12.22,3.56-24.61,6.83-37.11,10.31-12.53,3.2-25.18,6.55-37.96,9.66-51.16,12.63-104.3,24.07-158.44,36.03-54.12,11.98-106.67,24.02-156.72,37.7-12.53,3.38-24.79,7.09-37.06,10.54-12.11,3.84-24.17,7.45-35.98,11.36-5.88,1.98-11.73,3.99-17.55,5.98-5.85,1.96-11.62,3.94-17.29,6.08-5.72,2.04-11.34,4.2-16.93,6.39-5.59,2.11-11.11,4.38-16.57,6.62q-28.02,11.565-54.04,24.43c1.83,4.51,3.66,9.15,5.54,13.92,5.26,13.79,11.7,28.19,18.12,43.61,3.81,9.36,8.03,18.94,12.45,28.78q4.32,9.63,8.81,19.62c1.88,4.23,3.81,8.5,5.75,12.83s4.07,8.61,6.16,13.01c4.15,8.74,8.43,17.68,12.76,26.8,4.23,9.2,9.07,18.3,13.76,27.7,4.77,9.36,9.51,18.94,14.54,28.61q7.7,14.385,15.67,29.25c2.68,4.95,5.28,9.97,8.07,14.97q4.215,7.425,8.5,15c5.75,10.05,11.44,20.36,17.45,30.64q9.2,15.345,18.61,31.08c6.16,10.57,12.96,20.9,19.61,31.52,6.73,10.57,13.3,21.39,20.51,31.96q10.665,15.96,21.49,32.29,11.25,16.05,22.7,32.37c30.93,43.3,64.4,87.08,100.43,130.48,36.23,43.24,73.19,84.12,110.07,122.47.21.21.41.41.59.62a464.635,464.635,0,0,1,8.89-77.91c2.68-12.06,5.26-23.48,8.48-33.99.03-.08.05-.13.08-.21,1.57-5.31,2.96-10.41,4.64-15.26.08-.21.13-.39.21-.59,1.73,1.31,3.45,2.68,5.21,4.05,4.12,3.14,8.35,6.34,12.73,9.61,9.46,7.04,19.51,14.43,29.95,22.29,30.72,22.76,64.94,49.61,104.37,77.19q29.265,21.03,61.28,44.04c10.51,7.81,21.75,15.1,32.99,22.83q16.89,11.52,34.43,23.48,17.475,11.94,35.56,24.3c6.06,4.1,12.06,8.35,18.25,12.42q9.36,6.03,18.84,12.14,37.92,24.555,77.96,50.43c107.6,67.52,227.97,138.47,357.5,207.13,129.89,67.96,256.25,127.59,372.58,178.78q43.875,18.6,85.48,36.26,10.395,4.44,20.64,8.79c6.83,2.86,13.71,5.46,20.51,8.17q20.37,8.04,40.1,15.85,19.71,7.845,38.73,15.39c12.71,4.95,25.05,10.18,37.45,14.54q36.96,13.6,70.87,26.08,15.84,6.06,31.05,11.49c3.09-37.71,23.31-74.06,31.4-111.91,16.99-79.5-20.07-159.06-42.82-237.11Z'
              fill='#65cbe4'
            />
            <path
              id='Path_4'
              data-name='Path 4'
              d='M1815.38,1101.59c49.88-32.54,118.4-68.22,206.61-94.75,0,0-20.63-19.04-128.52,25.39,0,0,141.21-144.38,282.42-117.41,0,0-39.67-46.01-195.15-6.35,0,0,106.3-119,199.91-107.89,0,0-38.46-29.06-109.74-18.17l217.63-242.03s-222.13-31.73-514.06,406.17c0,0-82.5,184.05-152.32,349.06,0,0-152.32,388.72-204.67,488.68,0,0,309.39-552.14,337.95-590.22s247.51-147.56,485.5-66.64c0,0-156.47-126.86-425.56-25.83Z'
              fill='#e8f6f9'
            />
            <path
              id='Path_5'
              data-name='Path 5'
              d='M451.24,3126.56l690.18-209.43s271.31,704.46,1061.45,990.05c0,0-728.26-142.8-1056.69-594.98,0,0,57.12,242.75,466.47,509.3,0,0-518.82-161.84-704.46-542.62,0,0-142.8,361.75-104.72,404.59l-352.23-556.9Z'
              fill='#e8f6f9'
            />
            <path
              id='Path_6'
              data-name='Path 6'
              d='M1089.06,2174.59s23.8,799.66,1123.32,1408.92l-466.47-356.99,123.76,23.8-199.91-204.67-4.76,99.96s-414.11-295.11-514.06-975.77c0,0,14.28-109.48,166.59-233.23,0,0-157.08,109.48-228.47,237.99Z'
              fill='#e8f6f9'
            />
            <path
              id='Path_7'
              data-name='Path 7'
              d='M911.36,3586.68s539.45,469.64,1446.99,850.43l-545.8-374.44,450.6,101.54s-1028.13-330.02-1351.8-577.53Z'
              fill='#e8f6f9'
            />
          </motion.g>
          <motion.g
            variants={logoLeft}
            initial='hidden'
            animate='show'
            id='Left'
            transform='translate(-2322.03 -2054.64)'
          >
            <motion.path
              variants={pathTest}
              initial='hidden'
              animate='show'
              id='Path_8'
              data-name='Path 8'
              d='M3628.49,2090.49c-9.15-6.49-18.84-12.94-28.37-20.26-4.79-3.61-9.74-7.16-14.61-11q-7.275-5.76-14.77-11.7c-19.74-16.13-40.18-33.73-60.59-53.37a1186.691,1186.691,0,0,1-122.88-138.47c-40.36-52.99-79.58-112.54-116.59-177.59-18.48-32.52-36.57-66.39-53.79-101.46q-6.5-13.14-13.09-26.42-6.345-13.38-12.76-26.88c-4.23-9.02-8.61-18.01-12.78-27.16s-8.35-18.32-12.58-27.55c-33.58-73.86-66.03-151.12-99.84-229.75-33.86-78.6-67.65-154.86-103.78-226.58-18.19-35.8-36.57-70.69-55.9-104.01q-7.275-12.525-14.43-24.87l-3.61-6.16-3.76-6.06c-2.5-3.99-5-8.01-7.5-12.01q-7.455-11.985-14.84-23.84c-5.03-7.83-10.18-15.51-15.21-23.19q-15.645-23.25-31.86-45.18a505,505,0,0,0-39.29,36.29c-43.89,45.09-79.34,118.52-39.76,167.43,20.51,25.35,54.59,34.33,82.37,51.4s50.96,53.87,32.85,80.98c-127.02-64.3-291.62-45.2-400.54,46.48-9.14,7.7-18.36,16.59-21.02,28.24a32.008,32.008,0,0,0-.74,5.26q8.31-3.885,16.99-7.72a608.162,608.162,0,0,1,68.22-25.44c48.97-14.92,105.22-24.74,166.15-22.4a396.264,396.264,0,0,1,93.37,14.41,356.9,356.9,0,0,1,92.36,40.49c7.19,4.77,14.64,9.36,21.57,14.66,3.48,2.63,7.14,5.08,10.54,7.89q5.1,4.14,10.26,8.3a450.846,450.846,0,0,1,38.79,36.54l4.66,4.87,4.48,5c2.99,3.38,5.98,6.73,8.99,10.1,5.72,6.93,11.67,13.81,17.16,21,11.29,14.23,21.91,29.12,32.24,44.33,10.36,15.18,20.13,30.87,29.79,46.75,2.37,3.97,4.77,7.96,7.16,11.96,2.32,4.05,4.66,8.07,6.98,12.11q6.96,12.135,13.99,24.38,27.405,49.245,53.3,100.95c34.38,68.86,65.33,137.13,95.2,202.82,29.79,65.74,58.81,128.81,88.22,187.93,29.38,59.15,59.66,113.96,90.59,163.75,22.03,35.49,44.4,68.35,66.77,98.34,4.28,5.75,8.58,11.42,12.89,16.96-.05,2.29-.08,4.66-.1,7.09-.13,5.9-.44,12.14-.75,18.74-.18,3.25-.33,6.6-.52,10.03-.39,10.36-1.52,21.34-2.47,33.04-.88,11.73-2.45,24.02-3.99,36.96-1.39,12.96-3.71,26.44-5.77,40.51-1,7.06-2.45,14.17-3.74,21.47-1.37,7.27-2.65,14.69-4.15,22.22q-2.4,11.25-4.9,22.88c-.85,3.89-1.62,7.81-2.55,11.73q-1.425,5.88-2.89,11.83c-1.96,7.94-3.87,16-6,24.15q-3.33,12.135-6.78,24.64c-2.22,8.35-4.9,16.67-7.47,25.13-2.6,8.45-5.1,17.04-8.09,25.59-2.91,8.56-5.82,17.22-8.79,25.95q-4.8,12.99-9.69,26.21c-13.35,35.13-28.63,70.97-45.92,106.93-17.47,35.85-36.26,69.97-55.74,102.13-4.97,7.96-9.87,15.9-14.74,23.74q-7.62,11.52-15.1,22.83c-4.9,7.6-10.15,14.84-15.23,22.09-5.13,7.19-10.03,14.41-15.28,21.26q-7.77,10.32-15.36,20.44c-5.13,6.65-10.36,13.07-15.44,19.46q-3.825,4.8-7.58,9.51c-2.55,3.12-5.18,6.13-7.71,9.17q-7.695,9.045-15.13,17.81c-5.05,5.77-10.13,11.31-15.08,16.83-4.64,5.08-9.1,10.21-13.74,15-.31.33-.62.67-.95,1.01-9.87,10.23-19.1,20.26-28.48,29.28-5.41,5.31-10.64,10.49-15.77,15.44q4.14-15.465,8.09-31.72c1.88-7.81,3.74-15.75,5.51-23.81,7.11-33.4,11.96-65.59,15.36-95.05q1.08-11.055,2.09-21.55c.85-7.01.98-13.81,1.49-20.41.26-4.61.67-9.1.93-13.48-19.2,19.67-42.7,43-70.05,69.15-70.02,196.82-148.58,396.9-298.33,541.23-28.28,27.25-59.7,53.39-75.51,89.34a94.868,94.868,0,0,0-5.63,17.15c.15-.08.29-.17.44-.25q10.095-5.685,20.39-11.47,5.145-2.865,10.31-5.8l1.23-.69.16-11.56-.16,11.56c3.06-1.7,6.15-3.39,9.13-5.29q20.445-12.57,41.57-25.54c7.04-4.36,14.2-8.58,21.26-13.14,6.96-4.66,13.99-9.38,21.08-14.1,7.09-4.74,14.2-9.51,21.39-14.3,3.58-2.4,7.19-4.79,10.82-7.22,3.61-2.42,7.27-4.79,10.77-7.42q21.255-15.42,43.09-31.24c14.74-10.28,28.76-21.91,43.27-33.19,14.41-11.44,29.33-22.55,43.45-35q21.45-18.24,43.4-36.88,21.18-19.44,42.73-39.3a2012,2012,0,0,0,165.43-176.02,1963.183,1963.183,0,0,0,140.81-196.22q15.27-24.975,30.23-49.53,14-25.125,27.7-49.76c9.46-16.24,17.42-33.04,25.82-49.4,8.22-16.44,16.85-32.45,24.04-48.91q11.2-24.465,22.16-48.32c1.88-3.97,3.48-8.02,5.15-12.04q2.475-6.03,4.95-12.01c3.27-7.96,6.55-15.9,9.79-23.76s6.47-15.67,9.66-23.43c3.09-7.78,5.8-15.64,8.71-23.37q3.405-9.24,6.75-18.37,3.405-9.24,6.75-18.32,1.665-4.56,3.32-9.05c1.44-3.74,2.6-7.55,3.81-11.31,1.24-3.76,2.45-7.53,3.66-11.24,2.42-7.47,4.82-14.9,7.19-22.22q3.6-11.01,7.09-21.8c1.13-3.61,2.42-7.16,3.43-10.77s2.04-7.19,3.04-10.77q6.03-21.42,11.86-41.96c1.91-6.88,3.99-13.61,5.67-20.36.77-3.25,1.55-6.47,2.32-9.66.72-3.02,1.44-6.03,2.16-8.99.1-.49.23-.95.34-1.42,6.34-26.44,12.91-51.54,17.32-75.66q3.675-18.06,7.11-35.02c1.08-5.67,2.45-11.21,3.27-16.75q1.35-8.265,2.65-16.29,2.625-16,5.1-30.9c.82-4.97,1.65-9.84,2.42-14.61.8-4.77,1.65-9.46,2.17-14.05q2.055-16,3.94-30.33c-9.48-5.85-19.28-12.16-29.28-18.97Z'
              fill='#19636b'
            />
            <path
              id='Path_9'
              data-name='Path 9'
              d='M2450.58,1149.53c108.92-91.68,273.52-110.78,400.54-46.48,18.12-27.11-5.07-63.91-32.85-80.98s-61.86-26.05-82.37-51.4c-39.58-48.91-4.13-122.34,39.76-167.43a506.945,506.945,0,0,1,39.29-36.29c-31.67-42.82-64.92-81.64-99.62-115.42-46.41-45.38-95.46-81.49-143.78-107.67a520.925,520.925,0,0,0-71.59-31.96c-2.94-1.06-5.82-2.09-8.71-3.12s-5.72-2.06-8.63-2.89c-5.77-1.75-11.44-3.45-17.04-5.15s-11.21-2.91-16.7-4.36c-2.73-.7-5.46-1.37-8.17-2.06-2.71-.64-5.41-1.11-8.09-1.68a476.772,476.772,0,0,0-82.11-10c3.48.31,5.28.72,5.31,1.26,0,.57-2.01,1.26-5.9,2.04-1.96.39-4.41.82-7.32,1.26-1.44.21-3.02.44-4.69.67q-2.52.42-5.39.93c-5.59.83-12.16,1.86-19.62,3.16,14.72,16.97,26.13,36.93,32.39,57.95,21.53,72.31,1.45,149.55-15.12,223.16s-28.69,154.55,6.31,221.39c20.38,38.92,56.85,75.58,49.46,118.88-3.11,18.22-13.97,34.35-17.66,52.46a66.092,66.092,0,0,0,6.66,45.12c4.18-2.37,8.44-4.75,12.82-7.14q19.2-10.53,41.05-20.75a33.12,33.12,0,0,1,.74-5.26c2.65-11.65,11.87-20.55,21.02-28.24Z'
              fill='#2b92a3'
            />
            <path
              id='Path_10'
              data-name='Path 10'
              d='M2768.71,3446.44c149.75-144.34,228.31-344.41,298.33-541.23q-6.33,6.06-12.94,12.31c-92.88,88.09-226.04,204.78-382.37,322.48-39.22,29.3-78.5,56.88-117.7,81.72-19.61,12.4-39.12,24.2-58.63,35.13-19.43,11.06-38.86,21.18-58.04,30.64-26.34,12.83-52.3,24.21-77.67,33.95-17.45,52.11-22.51,105.57-4.9,158.15,12.58,37.57,35.17,69.33,62.88,97.99,6.07-2.26,12.25-4.57,18.61-6.94,5.08-1.88,10.23-3.81,15.49-5.77,5.28-1.88,10.46-4.28,15.82-6.47q16.05-6.69,33.04-13.81c22.86-9.07,46.23-20.46,70.97-31.88,6.18-2.86,12.45-5.77,18.76-8.69,6.31-2.99,12.5-6.37,18.86-9.56q19.065-9.78,38.89-19.95,4.98-2.52,9.97-5.1c3.35-1.68,6.6-3.63,9.92-5.46q9.675-5.445,19.56-11.01a94.887,94.887,0,0,1,5.63-17.15c15.81-35.95,47.23-62.09,75.51-89.34Z'
              fill='#2b92a3'
            />
            <path
              id='Path_11'
              data-name='Path 11'
              d='M2415.77,4092.25c538.34,19.88,1078.81-251.42,1383.29-694.37-55.75,199.54-178.42,379.92-343.76,505.49,380.03-201.4,695.69-514.99,911.32-885.87q-30.72-2.76-62.57-5.16c-49.64-3.84-101.23-7.42-154.14-12.27-52.91-4.92-104.66-10.98-154.42-19.3-12.45-2.04-24.71-4.46-36.9-6.67-12.14-2.55-24.2-4.95-36.05-7.68-5.9-1.42-11.8-2.81-17.65-4.23-5.85-1.37-11.67-2.78-17.45-4.36q-8.655-2.25-17.16-4.74c-5.67-1.57-11.29-3.3-16.85-4.97a819.157,819.157,0,0,1-117.29-45.83c-232.96,564.75-728.95,1022.72-1320.34,1189.96Z'
              fill='#19636b'
            />
            <path
              id='Path_12'
              data-name='Path 12'
              d='M4573.87,3046.67c-39.51-8.38-82.19-15.28-127.34-20.82-25.83-3.17-52.53-5.88-79.92-8.34-215.63,370.89-531.29,684.47-911.32,885.87,165.35-125.57,288.02-305.95,343.76-505.49-304.48,442.95-844.95,714.25-1383.29,694.37,591.39-167.24,1087.39-625.21,1320.34-1189.96-1.95-.95-3.9-1.9-5.82-2.85a665.319,665.319,0,0,1-98.78-59.79c-14.2-10.51-27.32-21.11-39.25-31.65q-9.12-8.16-17.4-16.16c-.67,1.88-1.31,3.76-1.98,5.67-2.81,7.89-5.44,15.93-8.45,23.89q-4.71,11.865-9.46,23.92t-9.59,24.28c-1.62,4.07-3.25,8.17-4.87,12.27s-3.2,8.25-5.08,12.29q-10.785,24.36-21.91,49.38c-7.11,16.83-15.72,33.17-23.89,49.97-8.38,16.7-16.34,33.89-25.8,50.49q-13.755,25.17-27.78,50.82-15.075,25.05-30.44,50.59a1908.421,1908.421,0,0,1-142.8,200.17,1873.67,1873.67,0,0,1-169.42,178.18q-22.185,19.875-43.97,39.38-22.575,18.6-44.69,36.83c-14.54,12.4-29.89,23.43-44.74,34.77-14.97,11.16-29.43,22.65-44.61,32.78q-22.5,15.54-44.4,30.69c-3.63,2.58-7.4,4.9-11.13,7.27-3.71,2.35-7.42,4.72-11.13,7.04q-11.1,7.035-22.06,13.94-10.935,6.915-21.72,13.71c-7.24,4.43-14.64,8.53-21.88,12.73q-21.765,12.525-42.83,24.64c-3.48,2.06-7.09,3.87-10.64,5.72s-7.09,3.71-10.62,5.57q-10.59,5.49-20.98,10.93c-6.91,3.61-13.79,7.16-20.57,10.7-3.43,1.75-6.75,3.61-10.18,5.21-3.45,1.62-6.86,3.22-10.26,4.82q-20.415,9.585-39.97,18.76c-6.52,2.99-12.91,6.16-19.38,8.94q-9.735,4.065-19.25,8.07c-25.38,10.57-49.35,21.11-72.75,29.28q-17.4,6.45-33.81,12.5c-5.49,1.96-10.8,4.15-16.18,5.82q-8.04,2.595-15.85,5.13-15.54,5.025-30.02,9.69c-4.85,1.55-9.56,3.07-14.2,4.56-4.64,1.47-9.15,2.99-13.68,4.18-2.86.8-5.7,1.57-8.48,2.32q-13.14,3.63-25.1,6.93c-1.5-.69-2.99-1.4-4.49-2.1a690.364,690.364,0,0,0,26.18,232.52c22.75,78.05,59.81,157.61,42.82,237.11-8.09,37.86-28.31,74.21-31.4,111.91,1.17.42,2.35.85,3.51,1.26,5.82-1.62,11.75-3.32,17.81-5q14.925-4.17,30.8-8.58c21.13-5.9,43.53-11.85,66.83-18.94,93.58-26.83,204.14-61.83,325.26-105.17,7.55-2.71,15.23-5.26,22.86-8.14q11.445-4.245,22.99-8.58,23.16-8.625,46.83-17.42c15.82-5.75,31.6-12.16,47.57-18.4l48.4-19.05c8.17-3.14,16.29-6.55,24.43-9.92,8.14-3.4,16.34-6.78,24.53-10.21q24.66-10.2,49.71-20.59,24.825-10.86,50.02-21.85,12.6-5.49,25.26-11.03c4.23-1.83,8.48-3.69,12.71-5.51,4.2-1.93,8.43-3.87,12.63-5.8,135.27-61.08,261.73-124.53,374.79-185.99,56.8-30.36,109.79-60.51,157.95-91,48.17-30.46,91.28-61.44,128.45-92.42a761.471,761.471,0,0,0,93.11-91.31c12.5-14.61,23.25-28.94,32.88-42.34,4.12-5.98,8.07-11.8,11.7-17.42q7.035-10.71,12.71-20.54,2.745-4.71,5.26-9.2c.77,1.88,1.49,3.79,2.24,5.75,2.01,5.33,3.99,10.82,6.11,16.42q2.595,7.035,5.28,14.3c.88,2.42,1.8,4.87,2.65,7.35.8,2.5,1.62,5.03,2.45,7.55q4.875,15.225,10.05,31.29c8.5,28.63,16.52,59.45,23.48,91.95.44-.41.88-.85,1.31-1.26,12.81-12.01,25.72-25.36,39.46-39.15q5.145-5.175,10.41-10.46c3.51-3.56,6.91-7.27,10.41-10.95q10.515-11.1,21.44-22.68c4.41-4.51,8.68-9.23,12.99-14.02.7-.77,1.39-1.57,2.09-2.35,2.27-2.53,4.54-5.08,6.85-7.63,7.37-8.22,14.97-16.49,22.52-25.08q11.175-13.035,22.7-26.47c3.84-4.51,7.76-8.97,11.6-13.58q5.685-6.99,11.47-14.07c7.65-9.46,15.57-18.94,23.37-28.73q11.475-14.85,23.32-30.08c8.02-10.05,15.54-20.67,23.4-31.24,7.76-10.62,15.85-21.18,23.43-32.29q11.565-16.545,23.37-33.4,11.4-17.13,22.99-34.61c30.51-46.83,60.46-96.41,89.04-148.37,28.3-52.08,53.99-103.99,77.16-154.89q8.55-19.14,16.91-37.96,7.92-18.975,15.69-37.63c5.18-12.01,9.69-24.1,14.35-36-11.39-2.76-23.12-5.41-35.1-7.96Z'
              fill='#2b92a3'
            />
          </motion.g>
          <motion.g
            variants={logoMiddle}
            initial='hidden'
            animate='show'
            id='Left'
            transform='translate(-2322.03 -2054.64)'
          >
            <path
              id='Path_13'
              data-name='Path 13'
              d='M2125.39,1579.63c1.85-29.96-33.38-45.78-60.32-59.03s-52.58-50.23-29.51-69.45c72,1.86,106.22-20.73,104.49-64.52-13.47-1.66-26.69-3.29-39.58-4.89-4.05-.51-8.06-1.02-12.05-1.5-3.99-.57-7.92-1.27-11.83-1.9-7.81-1.27-15.51-2.55-23.06-3.76q-11.34-1.905-22.27-3.73c-7.27-1.27-14.43-2.29-21.39-3.82q-20.835-4.365-40.01-8.4c-25.52-5.04-48.22-11.43-68.2-16.61-9.99-2.72-19.3-5.09-27.76-7.64-.14-.03-.25-.08-.4-.11-2.04,2.18-4.1,4.36-6.23,6.56-5.6,5.94-11.18,12.34-17.03,18.85-5.6,6.73-11.69,13.44-17.43,20.83-2.89,3.65-5.91,7.3-8.86,11.06q-4.335,5.73-8.8,11.63c-11.66,15.82-23.6,32.65-34.78,50.91-11.23,18.19-22.16,37.44-32.37,57.67-10.1,20.29-19.19,40.46-27.28,60.27-6.73,16.33-12.48,32.48-17.74,48.16q9.045,1.86,19.16,4.02c11.21,2.21,23.43,4.24,36.5,6.71,26.2,4.67,55.77,11.06,88.91,15.79q24.8,3.945,51.84,8.29c8.97,1.64,18.25,2.52,27.65,3.79,9.39,1.19,18.99,2.41,28.72,3.65q14.595,1.905,29.71,3.85c5.04.62,10.07,1.39,15.22,1.92,5.12.48,10.3.96,15.51,1.47q19.35,1.86,39.39,3.79a77.406,77.406,0,0,1,19.67-35.25c18.53-18.9,48.49-32.18,50.12-58.61Z'
              fill='#65cbe4'
            />
            <path
              id='Path_14'
              data-name='Path 14'
              d='M2680.76,1554.14c-11.03-20.42-6.91-45.36-2.3-68.11s9.19-47.48-1.11-68.28c-12.31-24.86-40.2-34.56-68.72-39.32-3.59.59-7.18,1.18-10.81,1.78a1803.9,1803.9,0,0,1-223.4,18.22,1984.638,1984.638,0,0,1-223.97-10.53c-3.49-.43-6.94-.85-10.4-1.28,1.73,43.79-32.49,66.38-104.49,64.52-23.06,19.21,2.58,56.2,29.51,69.45s62.16,29.07,60.32,59.03c-1.63,26.42-31.59,39.7-50.12,58.61a77.353,77.353,0,0,0-19.67,35.25q12.3,1.185,24.82,2.38c88.03,6.9,185.03,11.04,286.87,9.45,101.84-2.29,198.67-9.48,286.51-18.96q28.155-3.555,55.03-6.91,14.535-47.67,29.07-95.33c-13.05,19.19-46.11,10.45-57.14-9.97Z'
              fill='#2b92a3'
            />
            <path
              id='Path_15'
              data-name='Path 15'
              d='M2973.52,1510.77c-22.64-32.85-45.42-63.27-66.72-90.55-10.87-13.47-21-26.46-31.01-38.17-4.95-5.91-9.59-11.77-14.26-17.18-4.67-5.46-9.17-10.67-13.44-15.65-6.23-7.53-12.28-14.32-17.74-20.6-16.19,4.9-33.98,10.27-53.45,14.94-12.59,3.2-25.81,6.51-39.56,9.99-6.88,1.84-14.01,3.17-21.19,4.73q-10.86,2.3-22.07,4.64-11.25,2.34-22.86,4.75c-3.88.76-7.78,1.64-11.74,2.35-3.96.65-7.95,1.33-11.97,2.01q-19,3.135-38.85,6.4c28.51,4.76,56.41,14.46,68.72,39.32,10.3,20.8,5.72,45.53,1.11,68.28s-8.72,47.69,2.3,68.11,44.09,29.16,57.14,9.97q-14.535,47.67-29.07,95.33c3.01-.38,6.04-.76,9.03-1.13,5.21-.65,10.36-1.27,15.48-1.92s10.16-1.58,15.2-2.35q15.03-2.37,29.6-4.67c9.73-1.53,19.3-3,28.66-4.47,9.37-1.53,18.65-2.66,27.59-4.56q26.91-5.1,51.64-9.79c33.05-5.69,62.45-12.99,88.54-18.59,12.99-2.91,25.18-5.4,36.28-8.06,7.13-1.84,13.89-3.57,20.23-5.21-17.43-27.62-36.73-57.3-57.56-87.92Z'
              fill='#19636b'
            />
            <path
              id='Path_16'
              data-name='Path 16'
              d='M2284.14,2510c8.11-40.96,22.39-81.02,23.91-122.75a162.4,162.4,0,0,0-.29-17.07,1476.891,1476.891,0,0,1-166.77-12.19q-22.575-3.24-44.77-6.47l-43.61-8.12c-14.43-2.45-28.48-6-42.45-9.15-13.92-3.27-27.78-6.08-41.21-10q-20.22-5.535-39.92-10.93c-13.04-3.81-25.8-8.07-38.43-12.04-6.29-1.98-12.55-3.99-18.76-5.95-6.19-2.06-12.22-4.38-18.27-6.55q-18.09-6.57-35.59-12.94c-11.57-4.48-22.78-9.28-33.89-13.79-11.03-4.64-22.03-8.79-32.39-13.81q-15.69-7.23-30.75-14.17c-5-2.34-10-4.51-14.82-6.93-4.79-2.47-9.56-4.9-14.25-7.32-9.36-4.84-18.54-9.47-27.41-14.11a4.7,4.7,0,0,0-6.56,5.86q8.34,21.63,17.57,45.46c6.44,16.85,13.58,34.35,20.8,52.65,7.24,18.3,15.13,37.19,23.12,56.8q6.18,14.655,12.6,29.74c2.11,5.05,4.28,10.13,6.44,15.23,2.24,5.08,4.48,10.21,6.78,15.36q6.84,15.42,13.87,31.34,7.275,15.765,14.77,31.96c4.87,10.85,10.23,21.6,15.54,32.55,5.36,10.9,10.54,22.06,16.34,33.04q8.505,16.59,17.19,33.5,9.045,16.665,18.32,33.66c25.05,45.07,52.65,90.77,83.32,135.92,61.57,89.94,130.79,168.21,201.09,231.25,70.2,63.24,141.56,110.87,205.09,143.93q19.2,10.035,37.38,18.4-31.44-159.15-62.89-318.29c-21.13-106.93-42.29-217.17-21.11-324.09Z'
              fill='#65cbe4'
            />
            <path
              id='Path_17'
              data-name='Path 17'
              d='M2712.84,2578.09a816.576,816.576,0,0,0,170.89-233.47c-74.45,85.34-193.43,129.48-305.53,113.34a949.361,949.361,0,0,0,154.11-150.02c-1.44.45-2.86.92-4.31,1.36q-19.635,5.64-39.74,11.42c-13.38,4.07-27.19,7.06-41.05,10.51-13.94,3.3-27.91,7.04-42.32,9.64q-21.525,4.29-43.5,8.63-22.11,3.405-44.66,6.93a1432.553,1432.553,0,0,1-187.82,13.92q-10.605,0-21.16-.18a159.8,159.8,0,0,1,.29,17.07c-1.52,41.73-15.8,81.79-23.91,122.75-21.18,106.92-.02,217.16,21.11,324.09q31.44,159.15,62.89,318.29c5.02,2.32,9.99,4.57,14.87,6.71a4.655,4.655,0,0,0,4.71-.56c5.18-3.92,10.46-7.96,15.95-12.03,13.14-9.59,26.44-20.54,40.59-31.78,3.53-2.81,7.11-5.64,10.75-8.53,3.58-2.89,7.11-5.98,10.72-9.02q10.86-9.12,22.14-18.68c7.63-6.24,14.95-13.14,22.63-19.92,7.6-6.86,15.46-13.71,23.27-20.9,7.71-7.29,15.51-14.72,23.48-22.27,3.97-3.79,8.04-7.53,12.01-11.44,3.92-3.94,7.89-7.91,11.86-11.93,7.94-8.01,16.13-16.03,24.2-24.41q11.94-12.675,24.2-25.72c8.3-8.56,16.11-17.76,24.28-26.85,8.07-9.15,16.44-18.22,24.33-27.91q12.03-14.34,24.28-28.97,5.985-7.545,12.01-15.18a1472.828,1472.828,0,0,1,102.75-278.26,197.771,197.771,0,0,1-104.32,13.36Z'
              fill='#2b92a3'
            />
            <path
              id='Path_18'
              data-name='Path 18'
              d='M3039.97,2169.88l-.1.06q-11.565,6.765-23.81,13.94c-16.18,9.87-34.02,18.97-52.57,28.86q-6.99,3.675-14.12,7.47c-4.77,2.47-9.74,4.72-14.69,7.14q-14.925,7.11-30.49,14.56c-10.28,5.13-21.21,9.43-32.16,14.23-11,4.64-22.14,9.59-33.63,14.23q-17.4,6.615-35.36,13.43c-6.01,2.22-12.01,4.61-18.14,6.78q-9.285,3.06-18.66,6.21c-11.18,3.64-22.43,7.53-33.91,11.16a949.776,949.776,0,0,1-154.11,150.02c112.1,16.14,231.08-28,305.53-113.34a816.852,816.852,0,0,1-170.89,233.47,197.782,197.782,0,0,0,104.32-13.36A1472.822,1472.822,0,0,0,2714.43,2843q5.925-7.5,11.9-15.05c31.75-41,62.96-84.76,92.75-130.97,29.53-46.41,56.34-92.98,80.48-138.88q8.895-17.325,17.65-34.3,8.235-17.2,16.34-34.1c5.57-11.19,10.39-22.58,15.41-33.71,4.92-11.16,10.08-22.11,14.48-33.19q6.84-16.545,13.5-32.65c4.3-10.82,8.25-21.6,12.32-32.14q3.015-7.92,6-15.75c1.93-5.23,3.69-10.49,5.51-15.64q5.415-15.585,10.67-30.62c3.38-10.08,6.39-20.08,9.54-29.84,3.04-9.79,6.34-19.33,8.89-28.86q4.065-14.265,7.96-27.91c1.29-4.56,2.65-9.05,3.81-13.53s2.27-8.94,3.38-13.32c.63-2.49,1.26-4.97,1.88-7.42a4.7,4.7,0,0,0-6.94-5.22Z'
              fill='#19636b'
            />
            <path
              id='Path_19'
              data-name='Path 19'
              d='M1691.18,2245.99s145.18,356.99,299.87,583.08c0,0,259.41,226.09,307.01,259.41l-237.99-266.55s-219.06-315.95-247.51-437.91c0,0,223.71,57.12,328.43,57.12,0,0-361.75-99.96-449.81-195.15Z'
              fill='#e8f6f9'
            />
            <path
              id='Path_20'
              data-name='Path 20'
              d='M1837.28,1406.77c8.89-15.83,18.45-32.36,34.04-41.66,22.6-13.46,51.47-8.13,76.41.24s50.31,19.53,76.43,16.43a227.437,227.437,0,0,0-93.03-8.91c-8.55.96-17.58,2.67-23.86,8.54-11.97,11.17-4.88,35.18,11.24,38.05-12.82-1.17-26.19-2.26-38.16,2.46s-21.95,17.19-19.34,29.79c2.06,9.95,10.91,16.85,19.34,22.53a408.042,408.042,0,0,0,131.82,57.96,1254.709,1254.709,0,0,1-207.36-14.29c-6.15,22.37,13.21,47.89,36.41,47.98l-58.72,7.83,162.31,52.7q-54.045-5.3-107.64-14.34c-16.36-2.76-92.13-7.64-99.18-22.72-6.47-13.85,38.57-74.46,46.15-87.96q26.565-47.325,53.14-94.65Z'
              fill='#e8f6f9'
            />
          </motion.g>
        </g>
      </SvgStyle>
    </ContainerStyle>
  );
};

const SvgStyle = styled.svg`
  display: flex;
  width: 100%;
  height: 45vh;
  overflow-x: visible;

  align-items: center;
`;
const ContainerStyle = styled.div`
  width: 100%;
`;

export default Logo;
