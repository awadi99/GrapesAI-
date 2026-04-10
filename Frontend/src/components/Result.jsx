import { useState } from "react";
import { motion } from "framer-motion";

export default function Result() {
    const [image, setImage] = useState(null);
    const [result, setResult] = useState(null);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));


            setTimeout(() => {
                setResult({
                    disease: "Leaf Blight",
                    confidence: "96%",
                    solution:
                        "Use copper-based fungicides and remove infected leaves. Ensure proper air circulation."
                });
            }, 1500);
        }
    };

    return (
        <section className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#042f2e] text-white overflow-hidden">


            <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-green-400 opacity-10 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-400 opacity-10 blur-[150px] rounded-full"></div>


            <div className="relative z-10 max-w-6xl mx-auto">


                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center bg-gradient-to-r from-green-300 via-teal-300 to-sky-300 bg-clip-text text-transparent"
                >
                    AI Disease Detection 🔬
                </motion.h2>


                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 border-2 border-dashed border-white/20 rounded-2xl p-10 text-center backdrop-blur-xl bg-white/5 hover:border-green-400 transition"
                >
                    <input type="file" onChange={handleUpload} className="hidden" id="upload" />

                    <label htmlFor="upload" className="cursor-pointer">
                        <p className="text-lg text-gray-300">
                            Click or Drag Image to Upload 🍇
                        </p>
                    </label>
                </motion.div>


                {image && (
                    <div className="grid md:grid-cols-2 gap-10 mt-16">


                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                        >
                            <h3 className="mb-4 text-lg text-green-300">Uploaded Image</h3>

                            <img
                                src={image}
                                alt="preview"
                                className="rounded-xl w-full object-cover"
                            />
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                        >

                            <h3 className="mb-4 text-lg text-teal-300">Detection Result</h3>

                            {!result ? (
                                <p className="text-gray-400 animate-pulse">
                                    Analyzing image... 🤖
                                </p>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-4"
                                >

                                    <p>
                                        <span className="text-gray-400">Disease:</span>{" "}
                                        <span className="text-green-300 font-semibold">
                                            {result.disease}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="text-gray-400">Confidence:</span>{" "}
                                        <span className="text-sky-300 font-semibold">
                                            {result.confidence}
                                        </span>
                                    </p>

                                    <div className="mt-4 p-4 rounded-lg bg-green-400/10 border border-green-400/20">
                                        <p className="text-green-300 font-semibold mb-2">
                                            Suggested Solution
                                        </p>
                                        <p className="text-gray-300 text-sm">
                                            {result.solution}
                                        </p>
                                    </div>

                                </motion.div>
                            )}

                        </motion.div>

                    </div>
                )}

            </div>

        </section>
    );
}