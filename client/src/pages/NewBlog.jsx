import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useBlog} from '../middleware/contextHooks';
import { Transition } from 'react-transition-group';
import {LoremIpsum} from 'lorem-ipsum';
import {toast} from 'react-toastify';
import gsap from 'gsap';
import {
    Grid, Slider, TextField, Container,
    Button, Paper, Stack, Typography, 
    FormControlLabel, Checkbox
} from '@mui/material';

// #region -----------( COMPONENTS )-------------
import MainContainer from '../components/MainContainer';
// #endregion -----------( COMPONENTS )-------------


export default function NewBlog() {
    const navigate = useNavigate()

    const [newBlog, setNewBlog] = useState({title: '', content: ''});
    const {
        toasts, clearErrors, createBlog, 
        blogs, getBlogs, 
        blogCreated, currentBlog
    } = useBlog();
    const [onGenerate, setOnGenerate] = useState(false);

    useEffect(() => {
        if(!blogs) {
            getBlogs();
        }

        if(toasts){
            toasts.forEach(ele => {
                toast(ele.message, {type: ele.type})
            })
            clearErrors()
        }
        
        if(blogCreated){
            const id = currentBlog._id
            navigate(`/blogs/${id}`)
        }
    }, [
        toasts, clearErrors, blogs, getBlogs, navigate, 
        blogCreated, currentBlog
    ]);


    const handleSave = () => {
        if(newBlog.title.length > 0 && newBlog.content.length > 0) {
            createBlog(newBlog);
        } else {
            toast('Please provide a blog title and content', {type: 'error'})
        }
    }

    // const [loremOptions, setLoremOptions] = useState({
    //     minWordPerSentence: 3,
    //     maxWordPerSentence: 16,
    //     wordPerSentence: 4,

    //     minSentencePerParagraph: 4,
    //     maxSentencePerParagraph: 20,
    //     sentencePerParagraph: 5,

    //     minParagraphPerBlog: 2,
    //     maxParagraphPerBlog: 10,
    //     paragraphPerBlog: 3,
    // })

    // const handleGenerate = () => {
    //     const lorem = new LoremIpsum({
    //         sentencesPerParagraph:{
    //             max: loremOptions.maxSentencePerParagraph,
    //             min: loremOptions.minSentencePerParagraph
    //         },
    //         wordsPerSentence: {
    //             max: loremOptions.maxWordPerSentence,
    //             min: loremOptions.minWordPerSentence
    //         }
    //     })

    //     setNewBlog({
    //         title: lorem.generateSentences(1),
    //         content: lorem.generateParagraphs(loremOptions.paragraphPerBlog)
    //     })
    // }
    return (
        <MainContainer>
            <Container maxWidth="md" sx={{py: 2, my: 1, backgroundColor: '#e7edab'}} component={Paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        
                            label="Title" value={newBlog.title}
                            onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            multiline minRows={8} maxRows={20}
                            label="Content" value={newBlog.content}
                            onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                        />
                    </Grid>

                    <Grid item >
                        <Stack spacing={2} direction="row">
                            <Button onClick={handleSave}>Save</Button>
                            <Button variant='outlined' onClick={e => setNewBlog({title: '', content: ''})}>Clear</Button>
                            <Button onClick={() => navigate('/blogs')}>Cancel</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </MainContainer>
    )
}
