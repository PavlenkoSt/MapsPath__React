const formatLength = (length: number) => {
  if (length >= 1000) {
    return (length / 1000).toFixed(1) + ' km'
  }
  return length + ' m'
}

export default formatLength
