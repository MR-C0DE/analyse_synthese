import React, { useState } from 'react';
import '../../styles/CorpusManager.css';

const CorpusManager = () => {
  const [files, setFiles] = useState([]);
  const [segments, setSegments] = useState([]);
  const [cleanedSegments, setCleanedSegments] = useState([]);

  // Handler for file upload
  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).filter(file => file.type === 'text/plain');
    setFiles(uploadedFiles);
  };

  // Function to segment the corpus
  const segmentCorpus = () => {
    const newSegments = files.map(file => ({
      name: file.name,
      content: 'Segmented content of ' + file.name // Replace with actual segmentation logic
    }));
    setSegments(newSegments);
  };

  // Function to clean segments
  const cleanSegments = () => {
    const stopWords = ['a', 'the', 'and', 'of', 'in', 'to', 'is', 'that', 'it']; // Example stop words
    const newCleanedSegments = segments.map(segment => ({
      ...segment,
      content: segment.content.split(' ').filter(word => !stopWords.includes(word)).join(' ')
    }));
    setCleanedSegments(newCleanedSegments);
  };

  return (
    <div className="CorpusManager">
      <h2>Gestionnaire de Corpus</h2>
      
      <div className="section">
        <h3>Téléverser le Corpus</h3>
        <input type="file" multiple accept=".txt" onChange={handleFileUpload} />
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
      
      {files.length > 0 && (
        <div className="section">
          <h3>Segmenter le Corpus</h3>
          <button onClick={segmentCorpus}>Segmenter</button>
          <ul>
            {segments.map((segment, index) => (
              <li key={index}>{segment.name}: {segment.content}</li>
            ))}
          </ul>
        </div>
      )}

      {segments.length > 0 && (
        <div className="section">
          <h3>Nettoyage des Segments</h3>
          <button onClick={cleanSegments}>Enlever les petits mots</button>
          <ul>
            {cleanedSegments.map((segment, index) => (
              <li key={index}>{segment.name}: {segment.content}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CorpusManager;
