window.addEventListener('DOMContentLoaded', () => {
  const polarisEntity = document.querySelector('#polaris-entity');
  polarisEntity.setAttribute('visible', 'true');
});


    scene.addEventListener('click', function (event) {
        // Get the click coordinates
        const x = event.clientX;
        const y = event.clientY;

        // Convert screen coordinates to A-Frame world coordinates
        const worldCoordinates = screenToWorldCoordinates(scene, x, y);

        // Set the model's position and make it visible
        polarisEntity.setAttribute('position', worldCoordinates);
        polarisEntity.setAttribute('visible', true);
    });
});

function screenToWorldCoordinates(scene, x, y) {
    const camera = scene.camera;
    const vector = new THREE.Vector3();

    vector.set(
        (x / window.innerWidth) * 2 - 1,
        -(y / window.innerHeight) * 2 + 1,
        0.5
    );

    vector.unproject(camera);
    return vector;
}
