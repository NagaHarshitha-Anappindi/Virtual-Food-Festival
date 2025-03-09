import PropTypes from "prop-types";

const AddressDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Step 2: Address Details</h2>

      {/* House/Flat No. */}
      <label className="block mb-4">
        House/Flat No.
        <input
          type="text"
          className="w-full p-2 border rounded mt-1"
          value={formData.address.houseNo}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: { ...formData.address, houseNo: e.target.value },
            })
          }
        />
      </label>

      {/* Street */}
      <label className="block mb-4">
        Street
        <input
          type="text"
          className="w-full p-2 border rounded mt-1"
          value={formData.address.street}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: { ...formData.address, street: e.target.value },
            })
          }
        />
      </label>

      {/* Landmark */}
      <label className="block mb-4">
        Landmark
        <input
          type="text"
          className="w-full p-2 border rounded mt-1"
          value={formData.address.landmark}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: { ...formData.address, landmark: e.target.value },
            })
          }
        />
      </label>

      {/* Button Container with Spacing */}
      <div className="flex justify-between mt-4 space-x-4">
        <button className="bg-gray-500 text-white px-6 py-2 rounded w-1/2" onClick={prevStep}>
          Back
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded w-1/2" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

AddressDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default AddressDetails;