import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 0;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Responsivo
function resizeCanvas() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    renderer.setSize(width, height);
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Criando as partículas
const particleCount = 100000;
const particleGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const velocities = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2; // Angulo aleatório
    const radius = 100; // Raio aleatório entre 0 e 30

    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = Math.sin(angle) * radius;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    

    // Velocidades tangenciais circulares para manter as partículas orbitando
    const tangentVelocity = Math.sqrt(radius) / 200; // Ajuste conforme necessário
    const radialVelocity = 1 / Math.sqrt(radius) / 500; // Reduzindo a velocidade radial
    velocities[i * 3] = -Math.sin(angle) * tangentVelocity - Math.cos(angle) * radialVelocity;
    velocities[i * 3 + 1] = Math.cos(angle) * tangentVelocity - Math.sin(angle) * radialVelocity;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;

    // Cor aleatória
    colors[i * 3] = Math.random() + 0.5;
    colors[i * 3 + 1] = Math.random() - 0.7;
    colors[i * 3 + 2] = Math.random() - 0.8;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particleGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const particleMaterial = new THREE.PointsMaterial({ 
    size: 0.1, 
    vertexColors: true 
});


const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);

//---------------------------------------------------------------------------------------------------

// Limitando a distância máxima das partículas do centro
const maxDistance = 60;

// Função de animação
function animate() {
    requestAnimationFrame(animate);

    const positionAttribute = particleGeometry.getAttribute('position');
    const velocityAttribute = particleGeometry.getAttribute('velocity');
    const colorAttribute = particleGeometry.getAttribute('color');

    for (let i = 0; i < particleCount; i++) {
        positionAttribute.array[i * 3] += velocityAttribute.array[i * 3];
        positionAttribute.array[i * 3 + 1] += velocityAttribute.array[i * 3 + 1];
        positionAttribute.array[i * 3 + 2] += velocityAttribute.array[i * 3 + 2];

        // Limitando a distância das partículas do centro
        const distanceFromCenter = Math.sqrt(
            Math.pow(positionAttribute.array[i * 3], 2) + 
            Math.pow(positionAttribute.array[i * 3 + 1], 2) +
            Math.pow(positionAttribute.array[i * 3 + 2], 2)
        );
        if (distanceFromCenter > maxDistance) {
            // Se a distância exceder o limite máximo, ajuste a posição da partícula
            positionAttribute.array[i * 3] *= (maxDistance / distanceFromCenter);
            positionAttribute.array[i * 3 + 1] *= (maxDistance / distanceFromCenter);
            positionAttribute.array[i * 3 + 2] *= (maxDistance / distanceFromCenter);
        }

        // Rotaciona as partículas em torno dos eixos x e y
        var rotationSpeedX = Math.random() / 1000; // Velocidade de rotação em torno do eixo x
        var rotationSpeedY = Math.random() / 1000; // Velocidade de rotação em torno do eixo y
        // Alterna a direção da rotação para diferentes partículas
        const direction = i % 2 === 0 ? 1 : -1;

        const x = positionAttribute.array[i * 3];
        const y = positionAttribute.array[i * 3 + 1];
        const rotatedX = x * Math.cos(direction * rotationSpeedX) - y * Math.sin(direction * rotationSpeedX);
        const rotatedY = x * Math.sin(direction * rotationSpeedY) + y * Math.cos(direction * rotationSpeedY);
        positionAttribute.array[i * 3] = rotatedX;
        positionAttribute.array[i * 3 + 1] = rotatedY;

        // Mudança de cor a cada 100 partículas
        if (i % 100 === 0) {
            const hueShift = 0.001; // Ajuste de mudança de cor
            for (let j = i; j < i + 100 && j < particleCount; j++) {
                const hue = (colorAttribute.array[j * 3] + hueShift) % 4; // Rotaciona o componente de matiz
                colorAttribute.array[j * 3] = hue;
            }
        }
    }

    positionAttribute.needsUpdate = true;
    colorAttribute.needsUpdate = true;

    renderer.render(scene, camera);
}

animate();
