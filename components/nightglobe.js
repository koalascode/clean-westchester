import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom";
import * as THREE from 'three'
import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styles from '../styles/Globe.module.css'
class NightGlobe extends Component {
    componentDidMount() {
        //Setup:
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
          });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);
        camera.position.setX(-3);

        //Sphere: 
        const nasaTexture = new THREE.TextureLoader().load('/nasanightmap.jpg')
    

        const geometry = new THREE.SphereBufferGeometry( 13, 32, 32 )
        const material = new THREE.MeshPhongMaterial({ 
            map: nasaTexture
        });
        const globe = new THREE.Mesh( geometry, material );
        scene.add( globe );


        //Lights:
        const ambientLight = new THREE.AmbientLight( 0xffffff );
        scene.add( ambientLight );

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 3, 5);
        scene.add(pointLight)

        renderer.render(scene, camera);

        //Controls: 
        const controls = new OrbitControls(camera, renderer.domElement); //See if you remove this later, but it seems to be good to leave unchanged.
        controls.enableZoom = false;

        navigator.userAgent.match(/iphone|android|blackberry/ig) ? controls.enabled=false : controls.enabled = true
        //Animate:
        function animate() {
            requestAnimationFrame(animate);

            globe.rotation.x += 0.0002;
            globe.rotation.y -= 0.00052;
            //globe.rotation.z += 0.0005;

            renderer.render(scene, camera);
        }
        animate()


       
        //Resize:
     //   function onWindowResize() {
          //  camera.aspect = window.innerWidth / window.innerHeight;
          //  camera.updateProjectionMatrix();
          //  renderer.setSize(window.innerWidth, window.innerHeight);
    //    }
      //  window.addEventListener('resize', onWindowResize); //Check that this code works. 
    }
   
    render() {  
            

        return (
            <div className={styles.container}>
                <canvas id="bg" ref={this.myRef}className={styles.globe}></canvas>
                <p id="text"></p>
            </div>
        )
    }
}

export default NightGlobe