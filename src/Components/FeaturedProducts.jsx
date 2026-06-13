import React from 'react'

const FeaturedProducts = () => {
    return (
        <section className="max-w-7xl mx-auto p-5">
            <div className="grid md:grid-cols-2 gap-4 h-[500px]">

                {/* Large Product */}
                <div className="bg-gray-200 rounded-xl overflow-hidden">
                    <img
                        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronics-sales-design-template-cf28b548cca8ae50dda04c96b67ec79f_screen.jpg?ts=1686572101"
                        alt=""
                        className="w-full h-full object-fill"
                    />
                </div>

                {/* Right Side */}
                <div className="grid grid-rows-2 gap-4">

                    <div className="bg-gray-200 rounded-xl overflow-hidden">
                        <img
                            src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/09/manepally-jewellers-special-offers-ad-deccan-chronicle-hyderabad-09-09-2018.png"
                            alt=""
                            className="w-full h-full object-fill"
                        />
                    </div>

                    <div className="bg-gray-200 rounded-xl overflow-hidden">
                        <img
                            src="https://wbt-site-assets.whizbangtraining.com/wp-content/uploads/2014/02/08112556/Blog-post-marking-down-merchandise-1.jpg"
                            alt=""
                            className="w-full h-full object-fill"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default FeaturedProducts
