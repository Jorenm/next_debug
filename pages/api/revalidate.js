export default async function handler(req, res) {
	if (!res.status) {
		return
	}

	// Check for secret to confirm this is a valid request
	try {
		if (req.query && req.query.slug) {
			await res.unstable_revalidate(req.query.slug)
			res.redirect(req.query.slug)
		} else {
			res.status(200).send()
		}
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		console.log(err)
		return res.status(500).send(err)
	}
}