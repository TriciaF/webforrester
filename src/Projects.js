import React from 'react';
import NavBar from './Nav-Bar';


class Projects extends React.Component {
  render() {
    return(
      <div>
        <div>
        </div>
        <h1 className='page-title'>Portfolio</h1>
            <div className='project-page'>
              <div className='project-section'>
                <div className='project-title'>ASL Alphabet</div>
                <div className='project-desc'>Using the spaced-repetition learning methodology, users can learn the sign for the American Sign Language alphabet.</div>
                <div className='project-icons'>
                  <svg className="project-app-icon" aria-hidden="true" data-prefix="fab" data-icon="react" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-130 189.1c4.6 8.8 9.3 17.5 14.3 26.1 5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5zm0-50.6c-6.3-14.9-11.6-29.5-16-43.6 14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26zm11.4 25.3c6.6-13.8 13.8-27.3 21.4-40.6 7.6-13.3 15.8-26.2 24.4-38.9 15-1.1 30.3-1.7 45.9-1.7 15.6 0 31 .6 45.9 1.7 8.5 12.6 16.6 25.5 24.3 38.7 7.7 13.2 14.9 26.7 21.7 40.4-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6-15.7 0-30.9-.5-45.6-1.4-8.7-12.7-16.9-25.7-24.6-39-7.7-13.3-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 210.2c25.3 0 45.8 20.5 45.8 45.8 0 25.3-20.5 45.8-45.8 45.8-25.3 0-45.8-20.5-45.8-45.8 0-25.3 20.5-45.8 45.8-45.8"></path></svg>
                  <svg className="project-app-icon" aria-hidden="true" data-prefix="fab" data-icon="js" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>
                  <svg  className='project-app-icon'xmlns="http://www.w3.org/2000/svg" data-icon='css3' viewBox="0 0 22.514001846313477 25.533000946044922" aria-labelledby="bksi-dev-css3-title" role='img'><path fill='currentColor' d="M11.274 17.525zM0 0l2.049 22.981 9.194 2.552 9.22-2.556L22.514 0H0zm18.257 5.256l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655H8.159l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H4.46l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"></path></svg> 
                  <svg className='project-app-icon' xmlns='http://www.w3.org/2000/svg' role='img' data-icon='mongo' viewBox="0 0 13.906999588012695 30.493999481201172" aria-labelledby="eosi-dev-mongodb-title" id="si-dev-mongodb"><path fill='currentColor' d="M13.677 13.525a13.663 13.663 0 0 0-.407-2.297c-.625-2.369-1.666-4.637-3.134-6.603a16.58 16.58 0 0 0-1.294-1.532c-.476-.499-1.004-.957-1.336-1.578-.21-.393-.41-.791-.614-1.187-.003.124-.011.248-.011.371 0-.124.009-.248.011-.372L6.762 0c-.022.075-.036.101-.036.129-.017.645-.383 1.083-.838 1.492-.512.46-.989.959-1.481 1.441.017.022.036.044.055.066-.019-.022-.038-.043-.055-.066C2.944 4.986 1.655 7.043.896 9.352a14.691 14.691 0 0 0-.517 2.056C.12 12.889 0 14.328.083 15.828c.046.829.191 1.645.407 2.448.785 2.917 2.379 5.336 4.558 7.392.405.382.842.729 1.265 1.093l.003-.011-.003.011.187.642.174.996.083 1.039c-.001.211-.01.423.003.633.003.054.074.104.113.156l.004-.006-.004.006.353.124.367.143a322.63 322.63 0 0 0-.063-.924l-.003-.91-.021.021.021-.021.127-1.386.092-.302.263-.467c.325-.262.674-.499.971-.79.536-.527 1.071-1.06 1.55-1.637a12.294 12.294 0 0 0 1.588-2.441c1.223-2.491 1.789-5.269 1.564-8.039l-.006-.074z"></path></svg>
              </div>
              <div className='project-links'>
                  <a rel='noopener noreferrer' target="_blank" href='https://learning-asl-alphabet.netlify.com'>App</a>
                  <a rel='noopener noreferrer' target='_blank' href='https://github.com/TriciaF/asl-client'>GitHub</a>
             </div>
             </div>
              <div className='project-section'>
                  <div className='project-title'>Manage Care</div>
                  <div className='project-desc'>An application which helps care takers manage prescription medications for their patients, the elderly, or the disabled.</div>
                  <div className='project-icons'>
                  <svg className="project-app-icon" aria-hidden="true" data-prefix="fab" data-icon="react" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-130 189.1c4.6 8.8 9.3 17.5 14.3 26.1 5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5zm0-50.6c-6.3-14.9-11.6-29.5-16-43.6 14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26zm11.4 25.3c6.6-13.8 13.8-27.3 21.4-40.6 7.6-13.3 15.8-26.2 24.4-38.9 15-1.1 30.3-1.7 45.9-1.7 15.6 0 31 .6 45.9 1.7 8.5 12.6 16.6 25.5 24.3 38.7 7.7 13.2 14.9 26.7 21.7 40.4-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6-15.7 0-30.9-.5-45.6-1.4-8.7-12.7-16.9-25.7-24.6-39-7.7-13.3-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 210.2c25.3 0 45.8 20.5 45.8 45.8 0 25.3-20.5 45.8-45.8 45.8-25.3 0-45.8-20.5-45.8-45.8 0-25.3 20.5-45.8 45.8-45.8"></path></svg>
                  <svg className="project-app-icon" aria-hidden="true" data-prefix="fab" data-icon="js" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>
                  <svg  className='project-app-icon'xmlns="http://www.w3.org/2000/svg" data-icon='css3' viewBox="0 0 22.514001846313477 25.533000946044922" aria-labelledby="bksi-dev-css3-title" role='img'><path fill='currentColor' d="M11.274 17.525zM0 0l2.049 22.981 9.194 2.552 9.22-2.556L22.514 0H0zm18.257 5.256l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655H8.159l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H4.46l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"></path></svg>
                  <svg className='project-app-icon' xmlns='http://www.w3.org/2000/svg' role='img' data-icon='mongo'viewBox="0 0 13.906999588012695 30.493999481201172" aria-labelledby="eosi-dev-mongodb-title" id="si-dev-mongodb"><path fill='currentColor' d="M13.677 13.525a13.663 13.663 0 0 0-.407-2.297c-.625-2.369-1.666-4.637-3.134-6.603a16.58 16.58 0 0 0-1.294-1.532c-.476-.499-1.004-.957-1.336-1.578-.21-.393-.41-.791-.614-1.187-.003.124-.011.248-.011.371 0-.124.009-.248.011-.372L6.762 0c-.022.075-.036.101-.036.129-.017.645-.383 1.083-.838 1.492-.512.46-.989.959-1.481 1.441.017.022.036.044.055.066-.019-.022-.038-.043-.055-.066C2.944 4.986 1.655 7.043.896 9.352a14.691 14.691 0 0 0-.517 2.056C.12 12.889 0 14.328.083 15.828c.046.829.191 1.645.407 2.448.785 2.917 2.379 5.336 4.558 7.392.405.382.842.729 1.265 1.093l.003-.011-.003.011.187.642.174.996.083 1.039c-.001.211-.01.423.003.633.003.054.074.104.113.156l.004-.006-.004.006.353.124.367.143a322.63 322.63 0 0 0-.063-.924l-.003-.91-.021.021.021-.021.127-1.386.092-.302.263-.467c.325-.262.674-.499.971-.79.536-.527 1.071-1.06 1.55-1.637a12.294 12.294 0 0 0 1.588-2.441c1.223-2.491 1.789-5.269 1.564-8.039l-.006-.074z"></path></svg>
                  </div>
                  <div className='project-links'>
                    <a rel='noopener noreferrer' target='_blank' href='https://manage-care.netlify.com'>App</a>
                    <a rel='noopener noreferrer' target='_blank' href='https://github.com/TriciaF/manageCare-client'>GitHub</a>
                  </div>
              </div>
              <div className='project-section'>
                <div className='project-title'>StreamLine</div>
                <div className='project-desc'>Find where a movie is streaming - HBO, Netflix, Amazon or Hulu.  Create your own box office to store movie title, rate the movies and add comments about the movie.
                </div>
                <div className='project-icons'>
                  <svg className="project-app-icon" aria-hidden="true" data-prefix="fab" data-icon="js" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg> 
                   <svg  className='project-app-icon'xmlns="http://www.w3.org/2000/svg" data-icon='css3' viewBox="0 0 22.514001846313477 25.533000946044922" aria-labelledby="bksi-dev-css3-title" role='img'><path fill='currentColor' d="M11.274 17.525zM0 0l2.049 22.981 9.194 2.552 9.22-2.556L22.514 0H0zm18.257 5.256l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655H8.159l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H4.46l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"></path></svg>
                   <svg className='project-app-icon' xmlns='http://www.w3.org/2000/svg' role='img' data-icon='jquery' viewBox="0 0 23.079998016357422 23.19400405883789" aria-labelledby="dxsi-dev-jquery_logo-title" id="si-dev-jquery_logo"><path fill='currentColor' d="M12.053 18.61c-.15-.034-.295-.081-.441-.124a12.403 12.403 0 0 1-.535-.172l-.058-.021a15.198 15.198 0 0 1-.375-.139l-.105-.041c-.136-.054-.271-.11-.405-.168l-.081-.036a17.755 17.755 0 0 1-.341-.159l-.099-.047c-.089-.043-.177-.09-.264-.134-.059-.031-.118-.06-.176-.092a12.256 12.256 0 0 1-.317-.178c-.035-.02-.071-.038-.107-.059a12.24 12.24 0 0 1-.412-.252l-.111-.074a8.272 8.272 0 0 1-.293-.195c-.032-.021-.063-.045-.094-.066-.093-.066-.186-.132-.277-.2l-.123-.093a9.358 9.358 0 0 1-.25-.196l-.112-.09c-.105-.087-.209-.173-.312-.263l-.034-.028c-.111-.097-.22-.197-.328-.298l-.092-.088c-.08-.076-.158-.153-.235-.231l-.092-.092a16.615 16.615 0 0 1-.289-.306l-.014-.015c-.1-.109-.197-.221-.293-.334l-.077-.091a13.35 13.35 0 0 1-.531-.681C2.583 10.651 1.794 6.518 3.55 3.124L1.994 5.098C0 7.964.248 11.693 1.771 14.738c.036.073.074.145.112.217.024.045.046.092.071.137l.044.079c.026.049.053.095.079.142.047.083.096.166.145.249a9.913 9.913 0 0 0 .252.4c.024.037.047.075.072.111.08.118.161.236.244.353l.007.009.041.056a9.157 9.157 0 0 0 .307.403c.067.085.136.169.206.253l.079.094a14.633 14.633 0 0 0 .293.333l.011.013a14.064 14.064 0 0 0 .617.629l.095.091c.105.099.211.196.319.291l.005.004.056.047c.095.082.192.164.29.245l.12.096a14.272 14.272 0 0 0 .37.287 10.275 10.275 0 0 0.37.264l.027.019c.086.06.175.116.263.174l.114.076c.136.086.273.171.412.253l.114.064c.102.059.205.117.309.174.056.03.114.059.171.088.073.038.147.078.221.115l.051.025.091.044c.116.055.233.11.351.163l.074.033c.135.059.271.116.409.17.033.014.066.026.1.039.127.049.256.098.386.143l.049.017c.142.05.286.096.43.141l.104.031c.147.044.293.097.445.125 9.643 1.759 12.444-5.795 12.444-5.795-2.352 3.065-6.528 3.873-10.485 2.974zm-3.474-7.816c.216.31.456.678.742.927.104.114.213.226.324.336l.085.084c.108.105.217.207.33.307l.014.012.003.003c.125.11.255.216.386.319l.088.069c.132.101.266.2.404.295l.012.009c.061.042.123.081.184.122.03.019.058.04.088.058.098.063.198.125.299.183l.042.024c.087.051.176.1.265.148.031.018.063.033.094.049l.185.096.028.012c.127.063.255.123.386.18l.085.035c.105.045.21.088.316.129l.135.05c.097.036.193.069.291.101l.131.042c.139.043.276.098.42.122 7.445 1.233 9.164-4.499 9.164-4.499-1.549 2.232-4.55 3.296-7.752 2.465a10.18 10.18 0 0 1-.422-.122l-.127-.041a7.908 7.908 0 0 1-.295-.102l-.133-.05a9.977 9.977 0 0 1-.317-.128l-.086-.036a9.135 9.135 0 0 1-.389-.18c-.066-.032-.13-.066-.195-.099l-.112-.058a9.766 9.766 0 0 1-.246-.139l-.059-.033c-.101-.059-.2-.12-.299-.182l-.09-.06a9.221 9.221 0 0 1-.193-.128 10.912 10.912 0 0 1-.402-.294l-.091-.071C10.471 9.642 9.36 8.13 8.831 6.415c-.554-1.778-.434-3.775.525-5.395L8.178 2.683c-1.442 2.075-1.364 4.853-.239 7.048.189.368.401.725.638 1.065zm7.848-2.567c.061.023.123.043.185.064l.082.026c.088.027.175.06.265.076 4.111.794 5.226-2.11 5.523-2.537-.977 1.406-2.618 1.744-4.632 1.255a6.084 6.084 0 0 1-1.067-.391 5.973 5.973 0 0 1-1.015-.619C13.966 4.734 12.846 2.125 14.022 0l-.637.877c-.85 1.251-.933 2.805-.344 4.186.622 1.467 1.897 2.617 3.384 3.163z"></path></svg>
                   <svg className='project-app-icon' xmlns='http://www.w3.org/2000/svg' role='img' data-icon='mongo' viewBox="0 0 13.906999588012695 30.493999481201172" aria-labelledby="eosi-dev-mongodb-title" id="si-dev-mongodb"><path fill='currentColor' d="M13.677 13.525a13.663 13.663 0 0 0-.407-2.297c-.625-2.369-1.666-4.637-3.134-6.603a16.58 16.58 0 0 0-1.294-1.532c-.476-.499-1.004-.957-1.336-1.578-.21-.393-.41-.791-.614-1.187-.003.124-.011.248-.011.371 0-.124.009-.248.011-.372L6.762 0c-.022.075-.036.101-.036.129-.017.645-.383 1.083-.838 1.492-.512.46-.989.959-1.481 1.441.017.022.036.044.055.066-.019-.022-.038-.043-.055-.066C2.944 4.986 1.655 7.043.896 9.352a14.691 14.691 0 0 0-.517 2.056C.12 12.889 0 14.328.083 15.828c.046.829.191 1.645.407 2.448.785 2.917 2.379 5.336 4.558 7.392.405.382.842.729 1.265 1.093l.003-.011-.003.011.187.642.174.996.083 1.039c-.001.211-.01.423.003.633.003.054.074.104.113.156l.004-.006-.004.006.353.124.367.143a322.63 322.63 0 0 0-.063-.924l-.003-.91-.021.021.021-.021.127-1.386.092-.302.263-.467c.325-.262.674-.499.971-.79.536-.527 1.071-1.06 1.55-1.637a12.294 12.294 0 0 0 1.588-2.441c1.223-2.491 1.789-5.269 1.564-8.039l-.006-.074z"></path></svg>

                </div>
                <div className='project-links'>
                  <a rel='noopener noreferrer' target='_blank' href='https://streamline-capstone.herokuapp.com'>App</a>
                  <a rel='noopener noreferrer' target='_blank' href='https://github.com/TriciaF/streamline'>GitHub</a>
                </div>
              </div>
              <div className='project-section'>
                <div className='project-title'>Cleveland Browns Trivia</div>
                <div className='project-desc'>The Cleveland Browns have been the focus of ridicule over their long-time loosing record.  Discover what you don't know about the Cleveland Browns in this humorous trivia app.</div>
                <div className='project-icons'>
                  <svg className="project-app-icon" aria-hidden="true" data-prefix="fab" data-icon="js" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>
                  <svg  className='project-app-icon'xmlns="http://www.w3.org/2000/svg" data-icon='css3' viewBox="0 0 22.514001846313477 25.533000946044922" aria-labelledby="bksi-dev-css3-title" role='img'><path fill='currentColor' d="M11.274 17.525zM0 0l2.049 22.981 9.194 2.552 9.22-2.556L22.514 0H0zm18.257 5.256l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655H8.159l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H4.46l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"></path></svg>
                  <svg className='project-app-icon' xmlns='http://www.w3.org/2000/svg' role='img' data-icon='jquery' viewBox="0 0 23.079998016357422 23.19400405883789" aria-labelledby="dxsi-dev-jquery_logo-title" id="si-dev-jquery_logo"><path fill='currentColor' d="M12.053 18.61c-.15-.034-.295-.081-.441-.124a12.403 12.403 0 0 1-.535-.172l-.058-.021a15.198 15.198 0 0 1-.375-.139l-.105-.041c-.136-.054-.271-.11-.405-.168l-.081-.036a17.755 17.755 0 0 1-.341-.159l-.099-.047c-.089-.043-.177-.09-.264-.134-.059-.031-.118-.06-.176-.092a12.256 12.256 0 0 1-.317-.178c-.035-.02-.071-.038-.107-.059a12.24 12.24 0 0 1-.412-.252l-.111-.074a8.272 8.272 0 0 1-.293-.195c-.032-.021-.063-.045-.094-.066-.093-.066-.186-.132-.277-.2l-.123-.093a9.358 9.358 0 0 1-.25-.196l-.112-.09c-.105-.087-.209-.173-.312-.263l-.034-.028c-.111-.097-.22-.197-.328-.298l-.092-.088c-.08-.076-.158-.153-.235-.231l-.092-.092a16.615 16.615 0 0 1-.289-.306l-.014-.015c-.1-.109-.197-.221-.293-.334l-.077-.091a13.35 13.35 0 0 1-.531-.681C2.583 10.651 1.794 6.518 3.55 3.124L1.994 5.098C0 7.964.248 11.693 1.771 14.738c.036.073.074.145.112.217.024.045.046.092.071.137l.044.079c.026.049.053.095.079.142.047.083.096.166.145.249a9.913 9.913 0 0 0 .252.4c.024.037.047.075.072.111.08.118.161.236.244.353l.007.009.041.056a9.157 9.157 0 0 0 .307.403c.067.085.136.169.206.253l.079.094a14.633 14.633 0 0 0 .293.333l.011.013a14.064 14.064 0 0 0 .617.629l.095.091c.105.099.211.196.319.291l.005.004.056.047c.095.082.192.164.29.245l.12.096a14.272 14.272 0 0 0 .37.287 10.275 10.275 0 0 0.37.264l.027.019c.086.06.175.116.263.174l.114.076c.136.086.273.171.412.253l.114.064c.102.059.205.117.309.174.056.03.114.059.171.088.073.038.147.078.221.115l.051.025.091.044c.116.055.233.11.351.163l.074.033c.135.059.271.116.409.17.033.014.066.026.1.039.127.049.256.098.386.143l.049.017c.142.05.286.096.43.141l.104.031c.147.044.293.097.445.125 9.643 1.759 12.444-5.795 12.444-5.795-2.352 3.065-6.528 3.873-10.485 2.974zm-3.474-7.816c.216.31.456.678.742.927.104.114.213.226.324.336l.085.084c.108.105.217.207.33.307l.014.012.003.003c.125.11.255.216.386.319l.088.069c.132.101.266.2.404.295l.012.009c.061.042.123.081.184.122.03.019.058.04.088.058.098.063.198.125.299.183l.042.024c.087.051.176.1.265.148.031.018.063.033.094.049l.185.096.028.012c.127.063.255.123.386.18l.085.035c.105.045.21.088.316.129l.135.05c.097.036.193.069.291.101l.131.042c.139.043.276.098.42.122 7.445 1.233 9.164-4.499 9.164-4.499-1.549 2.232-4.55 3.296-7.752 2.465a10.18 10.18 0 0 1-.422-.122l-.127-.041a7.908 7.908 0 0 1-.295-.102l-.133-.05a9.977 9.977 0 0 1-.317-.128l-.086-.036a9.135 9.135 0 0 1-.389-.18c-.066-.032-.13-.066-.195-.099l-.112-.058a9.766 9.766 0 0 1-.246-.139l-.059-.033c-.101-.059-.2-.12-.299-.182l-.09-.06a9.221 9.221 0 0 1-.193-.128 10.912 10.912 0 0 1-.402-.294l-.091-.071C10.471 9.642 9.36 8.13 8.831 6.415c-.554-1.778-.434-3.775.525-5.395L8.178 2.683c-1.442 2.075-1.364 4.853-.239 7.048.189.368.401.725.638 1.065zm7.848-2.567c.061.023.123.043.185.064l.082.026c.088.027.175.06.265.076 4.111.794 5.226-2.11 5.523-2.537-.977 1.406-2.618 1.744-4.632 1.255a6.084 6.084 0 0 1-1.067-.391 5.973 5.973 0 0 1-1.015-.619C13.966 4.734 12.846 2.125 14.022 0l-.637.877c-.85 1.251-.933 2.805-.344 4.186.622 1.467 1.897 2.617 3.384 3.163z"></path></svg> 
                  <svg className='project-app-icon' xmlns='http://www.w3.org/2000/svg' role='img' data-icon='mongo' viewBox="0 0 13.906999588012695 30.493999481201172" aria-labelledby="eosi-dev-mongodb-title" id="si-dev-mongodb"><path fill='currentColor' d="M13.677 13.525a13.663 13.663 0 0 0-.407-2.297c-.625-2.369-1.666-4.637-3.134-6.603a16.58 16.58 0 0 0-1.294-1.532c-.476-.499-1.004-.957-1.336-1.578-.21-.393-.41-.791-.614-1.187-.003.124-.011.248-.011.371 0-.124.009-.248.011-.372L6.762 0c-.022.075-.036.101-.036.129-.017.645-.383 1.083-.838 1.492-.512.46-.989.959-1.481 1.441.017.022.036.044.055.066-.019-.022-.038-.043-.055-.066C2.944 4.986 1.655 7.043.896 9.352a14.691 14.691 0 0 0-.517 2.056C.12 12.889 0 14.328.083 15.828c.046.829.191 1.645.407 2.448.785 2.917 2.379 5.336 4.558 7.392.405.382.842.729 1.265 1.093l.003-.011-.003.011.187.642.174.996.083 1.039c-.001.211-.01.423.003.633.003.054.074.104.113.156l.004-.006-.004.006.353.124.367.143a322.63 322.63 0 0 0-.063-.924l-.003-.91-.021.021.021-.021.127-1.386.092-.302.263-.467c.325-.262.674-.499.971-.79.536-.527 1.071-1.06 1.55-1.637a12.294 12.294 0 0 0 1.588-2.441c1.223-2.491 1.789-5.269 1.564-8.039l-.006-.074z"></path></svg>
                </div>
                <div className='project-links'>
                  <a rel='noopener noreferrer' target='_blank' href='https://cleveland-browns-trivia'>App</a>
                  <a rel='noopener noreferrer' target='_blank' href='https://github.com/TriciaF/'>GitHub</a>
                </div>
              </div>
            </div>
     </div>
    )
  }
}

export default Projects;