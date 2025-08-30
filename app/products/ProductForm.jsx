"use client";

import ButtonLoading from "@/components/shared/ButtonLoading";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

export default function ProductForm({ product }) {
  console.log("product--->", product);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    setError("");
    const selectedFiles = Array.from(e.target.files);

    const totalFiles = images.length + selectedFiles.length;
    if (totalFiles > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }

    const newImages = [...images, ...selectedFiles];
    setImages(newImages);

    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreview((prev) => [...prev, ...newPreviews]);
  };

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();

  //   if (images.length === 0) {
  //     setError("Please select at least one image.");
  //     return;
  //   }

  //   setLoading(true);
  //   setError("");

  //   try {
  //     const formData = new FormData(e.target);
  //     images.forEach((image) => formData.append("images", image));

  //     const res = await fetch("/api/product", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await res.json();
  //     const { name } = data.product;

  //     if (res.status === 201) {
  //       toast.success(`Product ${name} added successfully`);
  //       e.target.reset();
  //     } else {
  //       const data = await res.json();
  //       setError(data.message || "Something went wrong");
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //     setPreview([]);
  //     setImages([]);
  //   }
  // };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0 && !product) {
      setError("Please select at least one image.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData(e.target);

      // Append new images only if selected
      if (images.length > 0) {
        images.forEach((image) => formData.append("images", image));
      }

      const url = product ? `/api/product/${product.id}` : "/api/product";
      const method = product ? "PATCH" : "POST";

      const res = await fetch(url, { method, body: formData });
      const data = await res.json();

      if (res.ok) {
        toast.success(`Product ${product ? "updated" : "added"} successfully`);
        if (!product) e.target.reset();
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setPreview(product?.images || []); // keep old previews when editing
      if (!product) setImages([]);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    const newPreview = [...preview];

    newImages.splice(index, 1);
    newPreview.splice(index, 1);

    setImages(newImages);
    setPreview(newPreview);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (product?.images) {
      setPreview(product.images);
    }
  }, [product]);

  return (
    <>
      <div>
        {error && <p className="space-y-8 p-8 text-red-500">{error}</p>}
      </div>
      <form className="space-y-8 p-8" onSubmit={handleOnSubmit}>
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Product Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={product?.name}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., Organic Tomatoes"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Category *
              </label>
              <select
                defaultValue={product?.category}
                id="category"
                name="category"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Category</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="grains">Grains</option>
                <option value="dairy">Dairy</option>
                <option value="herbs">Herbs</option>
                <option value="honey">Honey</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Description *
              </label>
              <textarea
                defaultValue={product?.description}
                id="description"
                name="description"
                rows="4"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Describe your product, growing methods, quality, etc."
              ></textarea>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Pricing & Inventory
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Price per Unit (৳) *
              </label>
              <input
                defaultValue={product?.pricePerUnit}
                type="number"
                id="pricePerUnit"
                name="pricePerUnit"
                step="0.01"
                min="0"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="45.00"
              />
            </div>

            <div>
              <label
                htmlFor="unit"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Unit *
              </label>
              <select
                defaultValue={product?.unit}
                id="unit"
                name="unit"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Unit</option>
                <option value="kg">Kilogram (kg)</option>
                <option value="lbs">Pounds (lbs)</option>
                <option value="piece">Piece</option>
                <option value="liter">Liter</option>
                <option value="dozen">Dozen</option>
                <option value="bundle">Bundle</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="stock"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Available Stock *
              </label>
              <input
                defaultValue={product?.stock}
                type="number"
                id="stock"
                name="stock"
                min="0"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="100"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Product Images
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="images"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Upload Images (Max 5 images) *
              </label>
              {error && <p className="pb-2 text-sm text-red-500">{error}</p>}
              <div
                className={`${
                  error
                    ? "border-red-400"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg border-2 border-dashed p-6 text-center transition hover:border-primary-500`}
              >
                <input
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  type="file"
                  id="images"
                  multiple
                  accept="image/*"
                  className="hidden"
                />
                <label htmlFor="images" className="cursor-pointer">
                  <i className="fas fa-cloud-upload-alt mb-4 text-4xl text-gray-400"></i>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Click to upload images
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    PNG, JPG, GIF up to 10MB each
                  </p>
                </label>
              </div>

              <div
                id="imagePreview"
                className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5"
              >
                {preview.map((src, i) => (
                  <div key={i} className="group relative">
                    <Image
                      src={src}
                      alt="preview"
                      className="h-32 w-full rounded border object-cover"
                      width={128}
                      height={128}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(i)}
                      className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black bg-opacity-50 text-xs text-white opacity-0 transition group-hover:opacity-100"
                      title="Remove image"
                    >
                      <IoMdClose size={23} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Farm Information
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="farmLocation"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Farm Location *
              </label>
              <input
                defaultValue={product?.farmLocation}
                type="text"
                id="farmLocation"
                name="farmLocation"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., Sylhet, Bangladesh"
              />
            </div>

            <div>
              <label
                htmlFor="harvestDate"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Harvest Date
              </label>
              <input
                defaultValue={product?.harvestDate}
                type="date"
                id="harvestDate"
                name="harvestDate"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Product Features
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                name="features"
                value="organic"
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Organic</span>
            </label>
            <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                name="features"
                value="pesticide-free"
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Pesticide Free</span>
            </label>
            <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                name="features"
                value="fresh"
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Fresh</span>
            </label>
            <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                name="features"
                value="non-gmo"
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Non-GMO</span>
            </label>
            <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                name="features"
                value="local"
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Local</span>
            </label>
            <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                name="features"
                value="sustainable"
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Sustainable</span>
            </label>
            <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                name="features"
                value="fair-trade"
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Fair Trade</span>
            </label>
            <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                name="features"
                value="gluten-free"
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Gluten-Free</span>
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-lg bg-primary-600 py-3 font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {loading ? (
              <ButtonLoading />
            ) : (
              <span>{product ? "Update Product" : "Add Product"}</span>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
