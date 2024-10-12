
// Existing code...

export async function getAllRadioData(): Promise<any> {
  const apiUrl = 'https://www.mp3quran.net/api/v3/radios?language=ar';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching radio data:", error);
    throw error;
  }
}

// Other existing functions...

