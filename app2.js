import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
function make_scena(a,b,c,n){
  
  const points = [];
  for (let i=0;i<n;i++)
    points.push(new THREE.Vector3(Math.sin(i*a),Math.sin(i*b),Math.sin(i*c)));
  const geometry = new THREE.BufferGeometry().setFromPoints( points )
  const material = new THREE.LineBasicMaterial( { color: 0x0000ff } )
  const line = new THREE.Line( geometry, material )
  const scene = new THREE.Scene();
  scene.add(line)
  return scene
}

camera.position.set( 0, 0, 5 );
camera.lookAt( 0, 0, 0 );
var frame=0
function animate(){
  frame++
  camera.rotation.z+=.001
  camera.rotation.x+=.001
  renderer.render( make_scena(.003*frame,.00202*frame,.0012*frame,500), camera );
}
function call_animate() {
  requestAnimationFrame( animate );
}
setInterval(call_animate,20)