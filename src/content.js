function Content(content) {
  this.content = content
}

Content.prototype.print = function() {
  console.log(this.content)
}

module.exports = Content
