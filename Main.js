import * as THREE from "https://cdn.skypack.dev/three@0.133.1";
import {OrbitControls} from "./OrbitControls.js";

// Scene, camera and renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas:document.getElementById("canvas")});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(4);

// Set up orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Set up lighting
const light = new THREE.AmbientLight(0xFFFFFF);
light.position.set({x:10,y:10,z:10})
scene.add(light);

// Set background
const pastelTexture = new THREE.TextureLoader().load("./textures/pastel_background.jpg")
scene.background = pastelTexture;

// Generate a sphere at a given position. Returns the sphere.
function generateSphere(pos, radius, colour){
	let sphere =  new THREE.Mesh(
		new THREE.SphereGeometry(radius),
		new THREE.MeshStandardMaterial({color:colour})
	)
	sphere.position.set(...pos)
	return sphere;
}

// Generate n spheres of radius between r1 and r2 at positions between R1 and R2
function generateSpheres(n,r1,r2,dist){
	let spheres = [];
	for(let i=0;i<n;i++){
		// Generate a random radius between r1 and r2
		let radius = Math.random()*(r2-r1) + r1;
		// Generate a random position between R1 and R2
		const pos = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(dist));
		spheres.push(generateSphere(pos, radius, 0xffffff))
	}
	return spheres;
}

// Stars
const stars = generateSpheres(100, 0.1,0.2, 50);
stars.forEach((sphere)=>scene.add(sphere)); // Add to scene

console.log(stars[0])

function render(){
	controls.update();
	// for(let i = 0; i < stars.length; i++) {
	// 	// Generate a new theta and phi
	// 	let theta = Math.random()*0.01;
	// 	let phi = Math.random()*0.01;
	// 	stars[i].position.x += Math.sin(theta)*Math.cos(phi);
	// 	stars[i].position.y += Math.sin(theta)*Math.sin(phi);
	// 	stars[i].position.z += Math.cos(theta);
	// }
    renderer.render(scene,camera);
	requestAnimationFrame(render);
}
render();