import * as THREE from "./build/three.module.js";
import { OrbitControls } from "./jsm/controls/OrbitControls.js";
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.18/+esm';

/**
 * UIデバッグ
 */
const gui = new GUI();
console.log(gui);

const positionFolder = gui.addFolder("Ppsition")

//シーン
const scene = new THREE.Scene();

//カメラ
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(1, 1, 2);

//レンダラー
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

//ジオメトリを作ってみよう。
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

//マテリアル
const material = new THREE.MeshBasicMaterial({
  color: "red",
  // color: "#3b3a88",
});

//メッシュ化
const box = new THREE.Mesh(boxGeometry, material);
scene.add(box);

//gui.add(box.position, "x", -3, 3, 0.01);
positionFolder.add(box.position, "x").min(-3).max(3).step(0.001).name("transformX");
positionFolder.add(box.position, "y").min(-3).max(3).step(0.001).name("transformY");
positionFolder.add(box.position, "z").min(-3).max(3).step(0.001).name("transformZ");

gui.add(box, "visible");
gui.add(material, "wireframe");
gui.addColor(material, "color");

//ライト
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

//マウス操作
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

window.addEventListener("resize", onWindowResize);

const clock = new THREE.Clock();

function animate() {
  const elapsedTime = clock.getElapsedTime();

  controls.update();

  //レンダリング
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

//ブラウザのリサイズに対応
function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

animate();
