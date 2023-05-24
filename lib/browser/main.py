import sys
from PyQt5.QtCore import QUrl
from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.QtWebEngineWidgets import QWebEngineView

class BrowserWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Simple Browser")
        self.browser = QWebEngineView()
        self.setCentralWidget(self.browser)

    def load_url(self, url):
        self.browser.load(QUrl(url))

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = BrowserWindow()
    window.load_url("https://www.thelineproducer.com")
    window.show()
    sys.exit(app.exec_())