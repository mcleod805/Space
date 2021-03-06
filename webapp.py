from flask import Flask, url_for, render_template

app = Flask(__name__) #__name__ = "__main__" if this is the file that was run.  Otherwise, it is the name of the file (ex. webapp)

@app.route("/")
def render_main():
    return render_template('home.html')

@app.route("/p1")
def render_page1():
    return render_template('page1.html')

@app.route("/p2")
def render_page2():
    return render_template('page2.html')
    
@app.route("/p3")
def render_page3():
    return render_template('page3.html')

@app.route("/p4")
def render_page4():
    return render_template('page4.html')
    
@app.route("/p5")
def render_page5():
    return render_template('page5.html')

@app.route("/p6")
def render_page6():
    return render_template('page6.html')
    
@app.route("/p7")
def render_page7():
    return render_template('page7.html')
    
@app.route("/p8")
def render_page8():
    return render_template('page8.html')

@app.route("/p9")
def render_page9():
    return render_template('page9.html')
    
if __name__=="__main__":
    app.run(debug=False, port=54321)
