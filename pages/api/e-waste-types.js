import remarksToRecyclableList from "../data/remarks-to-recyclables"

const types = [];

Object.values(remarksToRecyclableList)
  .flat()
  .forEach((item) => {
    if (types.indexOf(item) === -1) {
      types.push(item);
    }
  });

export default function handler(req, res) {
  res.status(200).json(types);
}
