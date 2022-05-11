export default async function handler(req, res) {
	// Enable Preview Mode by setting the cookies
	res.setPreviewData({})

	// Redirect to the path from the fetched post
	res.redirect(req.query.slug)
}