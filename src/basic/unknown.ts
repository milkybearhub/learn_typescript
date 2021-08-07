export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log("unknown sample 1:", typeof maybeNumber, maybeNumber)

  // Error
  // const sum = maybeNumber + 10

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log("unknown sample 2:", typeof sum, sum)
  }
}
