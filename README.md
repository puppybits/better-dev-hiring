# Why we don't whiteboard, read resumes or test on algorithms.

1. Resumes don't tell you anything. Most people scan for buzz
words or the university the candidate attended.
2. In order to find out how someone performs give them a sample
or what a real day-to-day task you need them to complete.
3. This assessment is *timed*. It can be done remote but the
purpose of being timed is so that good developer will show
how they write better code in less time. It takes between one
and four hours to complete.
4. The assessment does *NOT* focus on architecture. We provide
one. This is because almost everyone just builds on the stack
and patterns a company already uses. If someone can build in
our stack according to our patterns thats all we need, not
everyone needs to be an architect.
5. Multiple developers can take rate this assessment. It will
give a written record that can be used for other developers
can standardize on what skills they want. This lets to *remove
bias* from your process.
6. After a candidate passes this we have a 30 minute call to
understand the breath of the person and how they might fit in
for us.
7. The last step is an on-site to have the candidate spend an
hour or so. They need to bring in a public piece of code they
are proud of. They talk about why they made the choices they
did and we proud them to understand how deep their knowledge is.

At no point do we whiteboard or ask about algorithms because
they almost never impact the app or the [end users performance](https://medium.com/@puppybits/letting-people-in-the-door-how-and-why-to-get-page-loads-under-2-seconds-340c487bd81d#.sp3ht6mgx).

For more info at our [medium post](https://medium.com/@puppybits/diversity-in-tech-in-3-easy-steps-d862609ee0d1#.a9s4jfdsc)

---

# Front-end Web Developer Assessment

# Installing

Make sure to have Node 4.0+ installed (w/ NPM).

```
// install node modules
npm install

// start webpack
npm start

// open the browser
open http://localhost:8081

```

# Test
Create a simple filterable list.

## Notes
  Please use Chrome to test your code.  
  See the docs folder for screenshot of the result at each stage.

## Step 1.
  Use the data source in src/data/starwars.js to display a list of names.
  Make sure to use the component/Person.js component to display the content.

## Step 2.
  Use the app.sass file to add styles the list.   
  Using Flexbox, display 3 items per line.    
  When there are more than 3 items in the list, it should wrap to the next line.  
  Any line that doesn't have 3 items fill the space.   
  (see doc/step2.png for a sample)  

## Step 3.
  Add an input to filter the list.  
  The list should filter as the user types.
  Filtering should not match case.

## Step 4.
  Add a click event to each item in the list.
  Upon clicking the name should fill the input box and filter the list.



# Submission
  When you are complete. Delete the node_modules folder, zip all the files and email it to me.
