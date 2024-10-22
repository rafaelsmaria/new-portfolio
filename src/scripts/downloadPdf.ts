export function downloadPDF(pdfUrl: string, fileName: string) {
    fetch(pdfUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao baixar o arquivo.');
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('Erro no download:', error);
        });
}
