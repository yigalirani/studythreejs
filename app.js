import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function make_cube(i){
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00+i*20 } );
  const cube = new THREE.Mesh( geometry, material );
  cube.position.x=i/10
  cube.position.y=i/10
  return cube
}
var N=10
var cubes=[]
for (let i=0;i<N;i++){
  var cube=make_cube(i)
  cubes.push(cube)
  scene.add( cube );
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  for (let i=0;i<N;i++){
    cubes[i].rotation.x += 0.02*i;
    cubes[i].rotation.y += 0.02*i;
  }
  camera.rotation.z+=.001
  camera.rotation.x+=.001

  renderer.render( scene, camera );
}

animate();
