
export function renderCertificates(certificates) {
    const certificatesContainer = document.getElementById('certificates');

    if (!certificatesContainer) {
        console.error('Certificates container not found.');
        return;
    }

    certificatesContainer.innerHTML = '';

    certificates.forEach(certificate => {
        const certificateDiv = document.createElement('div');
        certificateDiv.classList.add('certificate');

        const link = document.createElement('a');
        link.href = certificate.url;
        link.target = '_blank'; 

        const img = document.createElement('img');
        img.src = certificate.imagePath;
        img.alt = certificate.title; 

        link.appendChild(img);

        certificateDiv.appendChild(link);

        certificatesContainer.appendChild(certificateDiv);
    });
}
