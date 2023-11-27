const newFormHandler = async (event) => {
    event.preventDefault();
  
    const commentBody = document.querySelector('#comment-body').value.trim();
    const blogId = document.querySelector('#blog-id').value.trim();
  
    if (commentBody) {
        console.log('hello')
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ body: commentBody, blog_id: blogId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blogs/${blogId}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
        console.log(id)
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);

  document
    .querySelector('.comment-list')
    .addEventListener('click', delButtonHandler);
  