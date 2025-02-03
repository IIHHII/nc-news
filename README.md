NC-News is a news aggregation app where users can browse and interact with articles. It uses an API to fetch news articles, topics, comments, and user data. The app allows users to post comments, vote on articles, and read various topics.

Getting Started
To run the application locally:

Clone the repository

Copy
git clone https://github.com/IIHHII/nc-news.git
cd nc-news
Install dependencies
Run the following command to install the required dependencies:

Copy
npm install
Start the server
To run the app locally in development mode, use:

Copy
npm run dev
This will start the server, and you can view the app on http://localhost:3000.

API Endpoints
GET /api: Health check for the API.
GET /api/topics: Fetch all topics.
GET /api/articles/:article_id: Fetch an article by ID.
GET /api/articles: Fetch all articles.
POST /api/articles/:article_id/comments: Post a new comment.
PATCH /api/articles/:article_id: Update an article.
DELETE /api/comments/:comment_id: Delete a comment.

Technologies Used
Node.js and Express for the backend.
React for the frontend.
Vite for bundling and development. 