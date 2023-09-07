// Function to fetch all posts and display them in the 'response' element
async function fetchPosts() {
    try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Function to fetch a post by its ID and display it in the 'response' element
async function fetchPostById() {
    const id = document.getElementById('inputField').value;
    try {
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching post by ID:', error);
    }
}

// Function to fetch comments for a post by its ID and display them in the 'response' element
async function fetchComments() {
    const id = document.getElementById('inputField').value;
    try {
        const response = await fetch(`/api/posts/${id}/comments`);
        const data = await response.json();
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

// Function to fetch posts by tag name and display them in the 'response' element
async function fetchTags() {
    const name = document.getElementById('inputField').value;
    try {
        const response = await fetch(`/api/tags/${name}`);
        const data = await response.json();
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching tags:', error);
    }
}
