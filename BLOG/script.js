document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const commentText = document.getElementById('comment-text').value;
    const commentsSection = document.getElementById('comments-section');
    
    const newComment = document.createElement('p');
    newComment.textContent = commentText;
    
    commentsSection.appendChild(newComment);
    document.getElementById('comment-text').value = '';
});
