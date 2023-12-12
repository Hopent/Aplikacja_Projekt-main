import earth from "../textures/earth.jpg";
import jupiter from "../textures/jupiter.jpg";
import mars from "../textures/mars.jpg";
import neptune from "../textures/neptune.jpg";
import saturn from "../textures/saturn.jpg";
import uranus from "../textures/uranus.jpg";
import venus from "../textures/venus.jpg";
import mercury from "../textures/mercury.jpg";
import ring from "../textures/saturn_ring.png";

const random = (a, b) => a + Math.random() * b;

const textures = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, ring];
const names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "ring"];
const sizes = [0.04,0.09,0.09,0.05,1,0.85,0.36,0.35,0.7]
const xOrbit = [4, 6.8, 9, 13.7, 43.1, 77.6, 150, 200,77.6] 
const zOrbit = [2, 3.4, 4.5, 6.8, 21.5, 39.0, 75, 100,39.0]
const speed = [8,6,5,4,2,2,1,0.8,2,2]
const rotationSpeed = [4,4,4,4,5,4,3,5,5]
const offset = [random(0, Math.PI * 4),random(0, Math.PI * 4),random(0, Math.PI * 4),random(0, Math.PI * 4),random(0, Math.PI * 4),0,random(0, Math.PI * 4),random(0, Math.PI * 4),0]

const planetData = [];
const totalPlanets = 9;
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    xRadius: xOrbit[index],
    zRadius: zOrbit[index],
    size: sizes[index] * 10,
    speed: speed[index] * 0.02,
    offset: offset[index],
    rotationSpeed: rotationSpeed[index] * 0.001,
    textureMap: textures[index],
    name: names[index],
  });
}

export default planetData;