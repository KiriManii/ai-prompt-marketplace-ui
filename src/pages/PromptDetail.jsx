import { useParams, useNavigate } from 'react-router-dom'
import { useAppContext } from '../store/index.jsx'
import Button from '../components/common/Button'
import { useEffect, useState } from 'react'

function PromptDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPromptById, isLoading } = useAppContext();
  const [prompt, setPrompt] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    try {
      const foundPrompt = getPromptById(id);
      if (foundPrompt) {
        setPrompt({
          ...foundPrompt,
          fullDescription: "This advanced prompt is designed to help users create exceptional content. It works by analyzing patterns from thousands of examples, then creating new combinations that feel fresh and engaging. You can specify parameters to customize the output to your exact needs."
        });
      } else {
        setError("Prompt not found");
      }
    } catch (err) {
      setError("Failed to load prompt details");
    }
  }, [id, getPromptById]);
  
  // Rest of the component remains the same
  
  // ...
}

export default PromptDetail