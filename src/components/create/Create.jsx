import React, { useState } from 'react';
import classes from './create.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleCloseImage = () => {
    setImage(null);
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();

    try {
      // Simulate uploading the image (local storage)
      let filename = null;
      if (image) {
        filename = Date.now() + image.name;
        // Simulate storing the image in local storage
        localStorage.setItem(filename, JSON.stringify(image));
      }

      // Create a product object
      const product = {
        title,
        img: filename, // Store the image filename
      };

      // Simulate storing the product in local storage
      localStorage.setItem(`product_${Date.now()}`, JSON.stringify(product));

      // Redirect to the desired page
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Create food suggestions</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title: </label>
            <input
              type="text"
              placeholder="Title..."
              className={classes.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapperImage}>
            <label htmlFor="image" className={classes.labelFileInput}>
              Image: <span>Upload here</span>
            </label>
            <input
              type="file"
              id="image"
              className={classes.input}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            {image && (
              <p className={classes.imageName}>
                {image.name}{' '}
                <AiOutlineCloseCircle onClick={handleCloseImage} className={classes.closeIcon} />
              </p>
            )}
          </div>
          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
