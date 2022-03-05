import * as THREE from "https://cdn.skypack.dev/three@0.133.1";

// Scene, camera and renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas:document.getElementById("canvas")});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


const obj = new THREE.Mesh(
    new THREE.BoxGeometry(10,20,30),
    new THREE.MeshStandardMaterial({color:0xffffff})
)
scene.add(obj);

const light = new THREE.AmbientLight(0xff0000);
light.position.set({x:10,y:10,z:10})
scene.add(light);

function render(){
    obj.rotation.x += 0.01;
    obj.rotation.y += 0.02;
    obj.rotation.z += 0.03;
    requestAnimationFrame(render);
    renderer.render(scene,camera);
}
render();