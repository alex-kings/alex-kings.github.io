import * as THREE from "https://cdn.skypack.dev/three@0.133.1";
import "./Style.css"

// Scene, camera and renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas:document.getElementById("canvas")});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


const obj = new THREE.Mesh(
    new THREE.CubeGeometry(),
    new THREE.MeshStandardMaterial()
)

const light = new THREE.AmbientLight(0xffffff);

function render(){
    requestAnimationFrame(render);
    renderer.render(scene,camera);
}
render();