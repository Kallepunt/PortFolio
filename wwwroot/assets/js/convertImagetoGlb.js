function getglb(imageUrl, width, height) {
    return new Promise((resolve, reject) => {
        const depth = 3;

        // Create a scene
        // Create a scene
        const scene = new THREE.Scene();

        // Create a cube with the specified dimensions
        const geometry = new THREE.BoxGeometry(width, height, depth);

        // Load texture image (higher resolution)
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(imageUrl, () => {
            // Once the texture is loaded, create a PBR material for the front face
            const frontMaterial = new THREE.MeshStandardMaterial({
                map: texture,
                side: THREE.FrontSide, // Only apply the material to the front face
            });

            // Create a basic material for the other sides (light color)
            const otherMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

            // Create an array of materials, with the frontMaterial applied to the first face and otherMaterial to the rest
            const materials = [
                frontMaterial, // Front face with image
                frontMaterial, // Back face (and other sides) with light color
                frontMaterial, // Right face
                frontMaterial, // Left face
                frontMaterial, // Top face
                otherMaterial, // Bottom face
            ];

            const cube = new THREE.Mesh(geometry, materials);
            scene.add(cube);

            // Set up the camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 100;



            // Configure renderer
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Add lights to the scene (adjust lighting as needed)
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            scene.add(directionalLight);

            // Export the cube to GLB
            const exporter = new THREE.GLTFExporter();
            exporter.parse(
                scene,
                async (gltf) => {
                    const glbBlob = new Blob([gltf], { type: 'application/octet-stream' });
                    resolve(URL.createObjectURL(glbBlob));
                },
                { binary: true }
            );
        });
    });
}