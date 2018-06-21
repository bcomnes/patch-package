export const parseHunkHeaderLine = (headerLine: string): HunkHeader => {
    return this._fileMode ? parseInt(this._fileMode, 8) & 0o777 : 0o644
  private get isOneLineLeft() {
    return this.i === this.lines.length - 1
  }

            mode: this.fileMode,
      case undefined:
    } while (
      !this.isEOF &&
      // handle empty last line as not part of the context
      !(this.isOneLineLeft && this.currentLine === "") &&
      // while we have contiguous hunk line types
      (this.currentLine[0] === firstChar ||
        // handle mismatching context types
        (firstChar === " " && this.currentLine[0] === undefined) ||
        (firstChar === undefined && this.currentLine[0] === " "))
    )
  private currentLineIsPartOfHunk(): boolean {
    if (this.isEOF) {
      return false
    }
    switch (this.currentLine[0]) {
      case undefined:
      case " ":
      case "+":
      case "-":
      case "\\":
        return true
      default:
        return false
    }
  }

        while (
          this.currentLineIsPartOfHunk() &&
          !(this.isOneLineLeft && this.currentLine === "")
        ) {
export const parsePatch = (patchFileContents: string): ParsedPatchFile => {