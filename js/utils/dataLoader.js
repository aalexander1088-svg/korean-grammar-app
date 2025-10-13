// Data loading utilities for the Korean Grammar App

export const loadSentences = async () => {
  try {
    const response = await fetch('./data/sentences.json');
    if (!response.ok) {
      throw new Error(`Failed to load sentences: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading sentences:', error);
    return null;
  }
};

export const loadVocabulary = async () => {
  try {
    const response = await fetch('./data/vocabulary.json');
    if (!response.ok) {
      throw new Error(`Failed to load vocabulary: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading vocabulary:', error);
    return [];
  }
};

export const loadLessons = async () => {
  try {
    const response = await fetch('./data/lessons.json');
    if (!response.ok) {
      throw new Error(`Failed to load lessons: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading lessons:', error);
    return [];
  }
};
